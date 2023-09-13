import React, { useState, useEffect } from 'react';
import Heading from '../../Components/Title/Heading';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanDuration, setLoanDuration] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showEMI, setShowEMI] = useState(false);

  const calculateEMI = () => {
    const interest = (interestRate / 100) / 12;
    const numPayments = loanDuration * 12;
    const monthlyPayment = (loanAmount * interest) / (1 - Math.pow(1 + interest, -numPayments));

    setMonthlyPayment(monthlyPayment.toFixed(2));
    setShowEMI(true);
  };

  return (
    <div className=' w-full max-w-screen-xl mx-auto'>
      <div className='text-center'>
        <Heading heading={"Taking a loan? Calculate your EMI"} ></Heading>
      </div>
      
      <div className="flex gap-5 justify-between mb-10">
        <div>
          <label className="label font-bold  "><span className="label-text text-lg">Loan Amount</span></label>
          <div className='flex gap-1 items-center'>
            <input required type="number" 
            // placeholder="Loan Amount" 
            className="input input-bordered w-full bg-slate-200"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}/> <span className='text-gray-700 font-semibold text-lg'>Tk</span>
          </div>
        </div>
        <div>
          <label className="label font-bold  "><span className="label-text text-lg">Tenure</span></label>
          <div className='flex gap-1 items-center'>
            <input required
            type="number"
            // placeholder="Loan Duration"
            className="input input-bordered w-full bg-slate-200"
            value={loanDuration}
            onChange={(e) => setLoanDuration(e.target.value)}/>
            <span className='text-gray-900 font-semibold text-lg'>Month</span>
          </div>
        </div>
        <div>
          <label className="label font-bold  "><span className="label-text text-lg">Interest Rate</span></label>
          <div className='flex gap-1 items-center'>
            <input required type="number" 
            // placeholder="Interest Rate" 
            className="input input-bordered w-full bg-slate-200"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}/> 
            <span className='text-gray-900 font-semibold text-lg'>%</span>
          </div>
        </div>
        <div>
          <label className="label font-bold text-white "><span className="text-lg">Emi calculation</span></label>
          <button onClick={calculateEMI} class="capitalize btn bg-primary text-white hover:text-primary border hover:border-primary" type="submit" id="emi-calculate-btn">Calculate EMI</button>
        </div>
      </div>
      { showEMI &&
        <div className='text-center mb-10 text-3xl font-semibold tracking-wide'>
          <h1 className='mb-3  '>Your EMI is</h1>
          <p className=''><span className='text-primary font-bold text-4xl'>${monthlyPayment}</span> /Month</p>
        </div>
      }
      
    </div>
  );
};

export default LoanCalculator;