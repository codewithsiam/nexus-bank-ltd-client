import React from "react";

const InfoAddMoney = ({ showStripePayment }) => {
  return (
    <div>
      {!showStripePayment ? (
        <img src="/images/payment-icons/payment-img.png" alt="" />
      ) : (
        <img src="/images/payment-icons/stripe-payment-img.png" alt="" />
      )}
    </div>
  );
};

export default InfoAddMoney;
