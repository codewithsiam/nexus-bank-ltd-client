import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan.css"
import Heading from '../../../../Components/Title/Heading';
import { Link } from 'react-router-dom';

const StudentLoan = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] bg-image bg-[url(https://i.ibb.co/k3PmmyK/Nbl-education-loan-banner.jpg)]'>
                <div className='w-full max-w-screen-xl mx-auto'>
                    <h1 className='text-primary text-2xl'>Ready to dream</h1>
                    <p className='flex gap-1 items-center text-lg font-bold'>Retail Lone <PiCaretDoubleRightDuotone className='text-primary'/> Student Lone</p>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
            <div className='text-center my-10'>
                <h1 className='text-2xl md:text-4xl text-primary font-semibold'>Make Your Journey of Life Joyful</h1>
                <p className='text-xl md:text-3xl'>Available for small sized businesses operating in trading, manufacturing, services, non-farm activity, agriculture and agro-based industries, City SME Small Loan offers flexibility and convenience to help you grow your business.</p>
            </div>

            <div className='md:flex lg:gap-10 gap-5 items-center justify-between my-10'>
                <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10'>
                    <h1 className='text-[30px] text-primary'>BDT 3 - 25 lacs</h1>
                    <p>for unsecured loans</p>
                </div>
                <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10'>
                    <h1 className='text-[30px] text-primary'>BDT 10 lacs - 1 crore</h1>
                    <p>for secured loans</p>
                </div>
                <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10'>
                    <h1 className='text-[30px] text-primary'>12 - 60 months</h1>
                    <p>Loan tenure</p>
                </div>
            </div>

            <div>
                <div className='text-center'>
                <Heading heading= "Overview"></Heading>
                </div>
                <div className="collapse collapse-plus ">
                    <input className='' type="radio" name="my-accordion-3" checked="checked" /> 
                    <div className="collapse-title text-xl font-medium">
                        Features
                    </div>
                    <div className="collapse-content mt-4 text-lg"> 
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> Loan amounts from Tk. 50,000 to Tk. 20,00,000</p>
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> Flexible repayment option of 06 – 60 months</p>
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> No hidden charges</p>
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> Competitive interest rate</p>
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> Easy documentation and quick processing</p>
                        <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight/> Option for early settlement</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Processing Fee
                    </div>
                    <div className="collapse-content text-lg"> 
                        <p className='my-5'>please see the <Link 
                        to="https://drive.google.com/file/d/1Ai-vPQKmWeJv5UWRyjPV3NnlB8sPIrBC/view?usp=drive_link" 
                        className='text-rose-700'>Schedule of Charges</Link></p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Eligibility
                    </div>
                    <div className="collapse-content mt-4 text-lg"> 
                        <h1 className='mb-4'><span className='font-bold text-xl'>Age:</span> Minimum 21 and maximum 65 years or retirement date whichever is earlier at the loan maturity</h1>
                        <div className='mb-5'>
                            <h1 className='font-bold text-xl mb-2'>Experience:</h1>
                            <ul className='ml-2 md:ml-5'>
                                <li><span className='font-semibold'>Salaried person :</span>  1 year with 6 months permanent employment status</li>
                                <li><span className='font-semibold'>Self employed :</span>  1 year of practice in the profession
Businessperson : 2 years of involvement in the same nature of business</li>
                                <li><span className='font-semibold'>Businessperson :</span>   2 years of involvement in the same nature of business</li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h1 className='font-bold text-xl mb-2'>Monthly income criteria:</h1>
                            <ul className='ml-5 md:ml-10'>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px]'/> Minimum BDT 18,000 for Government staff</li>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px]'/> Minimum BDT 20,000 for CEPP/Payroll/Salary with MTB</li>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px]'/> Minimum BDT 30,000 for other salaried person</li>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px]'/> Minimum BDT 50,000 for Self-employed</li>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px]'/> Minimum BDT 50,000 for Businessperson/Land lord/Land lady/other income individuals</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" /> 
                    <div className="collapse-title text-xl font-medium">
                        Required Documents
                    </div>
                    <div className="collapse-content text-lg"> 
                        <p className='my-5'>Download basic required documents for Personal Loan, please <Link 
                        to="https://drive.google.com/file/d/1Ai-vPQKmWeJv5UWRyjPV3NnlB8sPIrBC/view?usp=drive_link" 
                        className='text-rose-700'>Click here</Link></p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default StudentLoan;