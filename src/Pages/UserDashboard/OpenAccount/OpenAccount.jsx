import React from 'react';

const OpenAccount = () => {
    const accounts = [
        {
          type: "Savings Account",
          description: "A basic account that allows users to deposit and earn interest on their savings.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Checking Account",
          description: "A versatile account used for everyday transactions, like paying bills and making purchases.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Money Market Account",
          description: "Similar to a savings account but often offers higher interest rates and limited check-writing capabilities.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Certificate of Deposit (CD)",
          description: "A fixed-term account with a higher interest rate than savings accounts.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Retirement Account",
          description: "Accounts designed to help users save for retirement with tax advantages.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Joint Account",
          description: "An account that can be opened by two or more people, often used for couples or business partners.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Business Account",
          description: "Accounts designed for business customers for managing business finances.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Student Account",
          description: "Geared towards students with special benefits like lower fees and overdraft protection.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "Kids/Youth Account",
          description: "An account for teaching children about managing money.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
        {
          type: "High-Yield Account",
          description: "An account with higher interest rates than traditional savings accounts.",
          image:"https://i.ibb.co/hC1LT0C/pngtree-vector-money-saving-icon-png-image-925419-removebg-preview.png"
        },
      ]
      
    return (
        <div className='max-w-screen-lg mx-auto  mt-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    accounts.map((account,index)=><div className='border-2 flex flex-col items-center justify-between rounded-lg' key={index}>
                        <img className='w-40 h-40' src={account.image} alt="" />
                        <h3 className='text-3xl font-semibold'>{account.type}</h3>
                        <p className='px-4 text-center mb-4'>{account.description}</p>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default OpenAccount;