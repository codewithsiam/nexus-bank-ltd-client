import React, { useState } from 'react';

const myProfileData = [
  {
    id: 1,
    image: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
    comment: "",
    name: "Hardli sefa",
    email: "rupu.tht@gmail.com",
    accountNumber: 44196540671248957,
    balance: 40000,
  },
];

const MyProfile = () => {
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('deposit');
  const [error, setError] = useState('');
  const [transactionSuccess, setTransactionSuccess] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleTransactionTypeChange = (event) => {
    setTransactionType(event.target.value);
  };

  const handleTransaction = () => {
    setError('');
    setTransactionSuccess(false);

    if (isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Invalid amount');
      return;
    }

    if (transactionType === 'withdraw' && parseFloat(amount) > myProfileData[0].balance) {
      setError('Insufficient balance');
      return;
    }

    // Simulate deposit and withdraw logic with a delay
    setTimeout(() => {
      const newBalance = transactionType === 'deposit'
        ? myProfileData[0].balance + parseFloat(amount)
        : myProfileData[0].balance - parseFloat(amount);

      // Update user balance and perform necessary actions
      // You can make an API call or use a state management library here

      setTransactionSuccess(true);
    }, 1000);
  };

  const user = myProfileData[0]; // Get the user from myProfileData

  return (
    <div className="user-profile mt-32">
      <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
      <div className="user-details">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Account Number:</strong> {user.accountNumber}</p>
        <p><strong>Balance:</strong> ${user.balance.toFixed(2)}</p>
      </div>
      <div className="user-actions">
        <div className="transaction-form">
          <label htmlFor="amount" className="block font-semibold mb-1">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            className="block w-full p-2 border rounded mb-2"
          />
          <label htmlFor="transactionType" className="block font-semibold mb-1">Transaction Type:</label>
          <select
            id="transactionType"
            value={transactionType}
            onChange={handleTransactionTypeChange}
            className="block w-full p-2 border rounded mb-2"
          >
            <option value="deposit">Deposit</option>
            <option value="withdraw">Withdraw</option>
          </select>
          <button
            className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleTransaction}
          >
            {transactionType === 'deposit' ? 'Deposit' : 'Withdraw'}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {transactionSuccess && <p className="text-green-500 mt-2">Transaction successful!</p>}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
