import React, { useState, useEffect } from 'react';
import CenterTitle from '../../Components/Title/CenterTitle';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanDuration, setLoanDuration] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    // Calculate the monthly payment based on the loan amount, interest rate, and duration.
    // You can implement the loan calculation logic here.

    // Example calculation:
    const interest = (interestRate / 100) / 12;
    const numPayments = loanDuration * 12;
    const monthlyPayment = (loanAmount * interest) / (1 - Math.pow(1 + interest, -numPayments));

    setMonthlyPayment(monthlyPayment.toFixed(2));
  }, [loanAmount, interestRate, loanDuration]);

  return (
    <div>
        <CenterTitle heading={"Taking a loan? Calculate your EMI"} ></CenterTitle>
        <div className="loan-calculator-form flex gap-5">
            <div>
                <label className="label"><span className="label-text">Loan Amount</span></label>
                <input type="number" placeholder="Loan Amount" 
                className="input input-bordered w-full bg-slate-200"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}/> Tk
            </div>
            <div>
                <label className="label"><span className="label-text">Loan Amount</span></label>
                <input type="number" placeholder="Interest Rate" 
                className="input input-bordered w-full bg-slate-200"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}/> %
            </div>
            <input
            type="number"
            placeholder="Loan Duration (years)"
            className="input input-bordered w-full bg-slate-200"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}
            />
        </div>
            <p>Monthly Payment: ${monthlyPayment}</p>
    </div>
  );
};

export default LoanCalculator;