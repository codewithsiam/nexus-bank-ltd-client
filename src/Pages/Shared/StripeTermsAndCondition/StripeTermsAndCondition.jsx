import React from 'react';

const StripeTermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-semibold mb-6 text-center text-gray-800">
          Terms and Conditions
        </h1>
        <div className="prose">
          <p>
            Welcome to Nexus Bank Ltd's Stripe payment service. By using this service, you agree to abide by the following terms and conditions:
          </p>
          <ol className="list-decimal ml-6 mt-4">
            <li>
              <span className="font-semibold">
                Payment Processing Fees:
              </span>{' '}
              Payment processing fees may apply. Please refer to our fee schedule for details.
            </li>
            <li>
              <span className="font-semibold">
                Payment Processing Time:
              </span>{' '}
              All payments made through this service are subject to verification and may take up to 2 business days to process.
            </li>
            <li>
              <span className="font-semibold">
                Dispute Resolution:
              </span>{' '}
              Nexus Bank Ltd is not responsible for any issues or disputes related to Stripe payments. Please contact Stripe support for assistance.
            </li>
            <li>
              <span className="font-semibold">
                Unauthorized Transactions:
              </span>{' '}
              Unauthorized or fraudulent transactions will be investigated, and appropriate legal action may be taken.
            </li>
            <li>
              <span className="font-semibold">
                Privacy Policy:
              </span>{' '}
              Your use of this service is subject to the bank's privacy policy and terms of service.
            </li>
          </ol>
          <p className="mt-4">
            By using this service, you acknowledge that you have read, understood, and agreed to these terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default StripeTermsAndConditions;
