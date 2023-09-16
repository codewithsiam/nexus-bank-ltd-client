import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const StripePayment = ({amount, accountNumber, reason }) => {

    return (
        <div>
            <h1 className="text-2xl font-semibold mb-8 -mt-10" >Stripe Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm amount={amount} accountNumber={accountNumber} reason={reason} ></CheckoutForm>

            </Elements>

        </div>
    );
};

export default StripePayment;