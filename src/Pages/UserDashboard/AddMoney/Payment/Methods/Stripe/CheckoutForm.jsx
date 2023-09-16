import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { AuthContext } from "../../../../../../providers/AuthProvider";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { baseUrl } from "../../../../../../config/server";

const CheckoutForm = ({ amount, accountNumber, reason }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useContext(AuthContext);
  const [countdown, setCountdown] = useState(10);
  const [showCountdown, setShowCountdown] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (amount > 0) {
      axios
        .post(`${baseUrl}/create-payment-intent`, {
          amount,
        })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      setProcessing(false);
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setProcessing(false);
      setCardError(error.message);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.username || "anonymous",
            accountNumber: accountNumber || "anonymous",
            reason: reason || "reason",
          },
        },
      });

    if (confirmError) {
      setProcessing(false);
      console.error(confirmError);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      const transactionId = paymentIntent.id;
      setTransactionId(transactionId);

      const paymentData = {
        reason,
        accountNumber,
        transactionId,
        amount,
        date: new Date(),
      };

      axios
        .post(`${baseUrl}/payments`, paymentData)
        .then((res) => {
          console.log("Payment successful:", res.data.insertedId);
          if (res.data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Payment Success",
              showConfirmButton: false,
              timer: 2000,
            });
            // call a countdown function and redirect to profile
            startCountdown();
          }
        })
        .catch((error) => {
          console.error("Payment error:", error);
          setProcessing(false);
        });
    }

    setProcessing(false);
  };

  // count down
  const startCountdown = () => {
    setShowCountdown(true);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(interval);
      navigate("/dashboard/my-profile", { replace: true });
    }, 10000);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white bg-opacity-80 rounded-lg shadow-lg ">
      {processing && (
        <div className="text-center my-5">
          <span className="animate-spin h-6 w-6 mr-2 border-t-2 border-primary"></span>
          <p className="text-gray-600">Please wait. Payment is processing</p>
        </div>
      )}

      <h1 className="text-2xl font-bold mb-4 text-[#004D6E]">
        Hello, {user?.displayName}!{" "}
        <SentimentVerySatisfiedIcon fontSize="large" color="" />
      </h1>
      {!showCountdown && (
        <p className="text-gray-600 mb-4">
          You're just one step away from adding money to your account.
        </p>
      )}
      {showCountdown && (
        <div className="text-center text-gray-600">
          Your payment complete with transaction id :{" "}
          <p className="text-semibold text-[#319cca]">{transactionId}</p> . You
          will be redirected to{" "}
          <Link
            to="/dashboard/account-overview"
            className="text-[#2a7b9e] underline font-semibold"
          >
            account overview
          </Link>
          in {countdown} {countdown === 1 ? "second" : "seconds"}.
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="card-element-container bg-transparent text-black rounded-lg p-4 shadow-md">
          <div className="flex text-gray-800">
            <p className="w-8/12">Card Number</p>
            <div className="w-4/12 flex gap-4">
              <p>Date</p>
              <p>CVC</p>
            </div>
          </div>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="mt-2 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className={` mt-12 mb-5 ml-4 btn-glow-siam font-semibold ${
            (!stripe ||
              !clientSecret ||
              processing ||
              !user ||
              showCountdown) &&
            "opacity-50 cursor-not-allowed"
          } ${processing && "cursor-wait"}`}
          disabled={processing || showCountdown}
        >
          {!showCountdown ? (
            <>
              {processing ? (
                <span className="flex items-center">
                  Processing{" "}
                  <span className="animate-spin ml-2 h-5 border-t-2 border-white"></span>
                </span>
              ) : (
                `Pay ${amount}$`
              )}
            </>
          ) : (
            "Payment Completed"
          )}
        </button>
      </form>

      {cardError && <p className="text-red-600 ml-8 mt-2">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
