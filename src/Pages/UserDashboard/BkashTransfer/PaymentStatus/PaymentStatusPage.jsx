import React from "react";
import { Link, useParams } from "react-router-dom";

const PaymentStatusPage = () => {
  const { status, transactionId } = useParams();

  const getStatusText = () => {
    switch (status) {
      case "success":
        return "Payment Successful";
      case "failed":
        return "Payment Failed";
      case "cancel":
        return "Payment Canceled";
      default:
        return "Payment Status Unknown";
    }
  };

  const getIconClass = () => {
    switch (status) {
      case "success":
        return "fas fa-check-circle text-green-500";
      case "failed":
        return "fas fa-times-circle text-red-500";
      case "cancel":
        return "fas fa-exclamation-circle text-yellow-500";
      default:
        return "fas fa-question-circle text-gray-500";
    }
  };

  const renderTransactionInfo = () => {
    if (status === "success" && transactionId) {
      return (
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Your transaction ID is: <strong>{transactionId}</strong>
          </p>
          <p className="text-green-600 mt-2">
            An email with transaction details has been sent to your inbox.
          </p>
        </div>
      );
    } else {
      return (
        <div className="mt-4 text-center">
          <p className="text-red-600">
            {status === "success"
              ? "Transaction details not available."
              : "We were unable to process your payment."}
          </p>
          {status !== "success" && (
            <p className="mt-2">Please contact customer support for assistance.</p>
          )}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <i className={`${getIconClass()} text-5xl`} />
      <h1 className="text-4xl font-semibold mt-4 text-center text-gray-800">
        {getStatusText()}
      </h1>
      {renderTransactionInfo()}
      <p className="text-gray-600 mt-2 text-center max-w-md">
        {status === "success"
          ? "Thank you for your payment. Your transaction has been processed successfully."
          : "Something went wrong. Your transaction has not been completed."}
      </p>
      <Link to="/dashboard/account-overview">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Back to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default PaymentStatusPage;
