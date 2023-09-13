import React from "react";
import { Link, useParams } from "react-router-dom";

const PaymentStatusPage = () => {
    const { status } = useParams();
    console.log(status);
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
        return "text-green-500";
      case "failed":
        return "text-red-500";
      case "cancel":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <i className={`fas fa-check-circle fa-5x ${getIconClass()}`} />
    <h1 className="text-4xl font-semibold mt-4 text-center text-gray-800">
      {getStatusText()}
    </h1>
    <p className="text-gray-600 mt-2 text-center max-w-md">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
