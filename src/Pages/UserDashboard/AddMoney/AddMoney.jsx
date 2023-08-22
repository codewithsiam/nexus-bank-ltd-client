import React, { useState } from "react";
import StripePayment from "./Payment/Methods/Stripe/StripePayment";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const AddMoney = () => {
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [showPaymentMethods, setShowPaymentMethods] = useState(false);
  const [showStripePayment, setShowStripePayment] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayClick = (event) => {
    event.preventDefault();

    const form = event.target;
    const amountInput = form.querySelector('input[name="amount"]');
    const enteredAmount = parseFloat(amountInput.value);

    if (enteredAmount > 0 && termsAgreed) {
      setErrorMessage(""); 
      setAmount(enteredAmount);
      setShowPaymentMethods(true);
    } else {
      setErrorMessage("Please enter a valid amount and agree to the terms");
    }
  };

  return (
    <div className="mt-20 max-w-md mx-auto p-6 bg-gradient-to-r  from-[#004D6E] to-[#00ACCC] shadow-lg rounded-lg text-white animate-fadeInUp">
      <div className="main">
</div>
      <h2 className="text-2xl font-bold">
        <span className="text-green-400 flex items-center justify-center">
          NEXUS BANK LTD
          <img
            className="w-10 h-10"
            src="https://i.ibb.co/Xzt8GjV/png-clipart-white-bank-illustration-online-banking-finance-icon-white-bank-building-building-black-w.png"
            alt=""
          />
        </span>
      </h2>
      <h3 className="font-semibold text-xl mb-4"> Add Money</h3>
      {!showPaymentMethods ? (
        <form onSubmit={handlePayClick}>
          <label className="block text-sm mb-2">Full Name</label>
          <input
            type="text"
            className="border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your full name"
            name="name"
          />

          <label className="block text-sm mt-4 mb-2">Enter Amount ($)</label>
          <div className="flex">
            <input
              type="number"
              className="border rounded-l w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter payment amount"
              name="amount"
            />
          </div>

          <div className="mt-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={termsAgreed}
                onChange={() => setTermsAgreed(!termsAgreed)}
              />
              <span className="ml-2">
                I agree to the{" "}
                <a href="/terms" className="underline">
                  Terms and Conditions
                </a>
              </span>
            </label>
            {errorMessage && (
              <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
            )}
          </div>
          <button
            type="submit"
           className="btn-glow-siam mt-7 mb-6"
          >
            Add Money
          </button>

        </form>
      ) : !showStripePayment ? (
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Select Payment Method</h3>
          <button
            className="bg-indigo-500 font-semibold hover:bg-indigo-800 text-white rounded px-4 py-2 mr-2"
            onClick={() => setShowStripePayment(true)}
          >
            Stripe
          </button>
          <button
            className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2"
            onClick={() => {
              // Handle bKash button click
            }}
          >
            bKash
          </button>
          <button
            onClick={() => setShowPaymentMethods(false)}
            className={`w-max mx-3 bg-[#004D6E] hover:bg-[#004D6E] hover:from-[#004D6E] hover:to-[#00ACCC] text-white rounded px-4 py-2 mt-4 focus:outline-none`}
          >
            <ArrowBackIcon fontSize="small" style={{ marginRight: "0.5rem" }} />
            Go Back
          </button>
        </div>
      ) : (
        <>
          <button
            onClick={() => setShowStripePayment(false)}
            className={`w-max relative -top-12 left-64 bg-[#004D6E] hover:bg-[#004D6E] hover:from-[#004D6E] hover:to-[#00ACCC] text-white rounded px-4 py-2 mt-4 focus:outline-none`}
          >
            <ArrowBackIcon fontSize="small" style={{ marginRight: "0.5rem" }} />
            Go Back
          </button>

          <StripePayment amount={amount} />
        </>
      )}
    </div>
  );
};

export default AddMoney;
