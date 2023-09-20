import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan.css"
import Heading from '../../../../Components/Title/Heading';
import { Link } from 'react-router-dom';

const PersonalLoan = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] bg-image bg-[url(https://i.ibb.co/pjJdRBc/Nbl-personal-loan-banner.jpg)]'>
                <div className='w-full max-w-screen-xl mx-auto '>
                    <h1 className=' text-3xl mb-3'>Ready to dream</h1>
                    <p className='flex gap-1 items-center text-xl font-bold'>Retail Lone <PiCaretDoubleRightDuotone className='text-primary'/> Personal Lone</p>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <h1 className='text-2xl md:text-4xl text-primary font-semibold mb-3'>Make Your Journey of Life Joyful</h1>
                    <p className='text-xl md:text-3xl'>Whatever the occasion or requirement, make a smart financial choice with City Bank Personal Loan to fulfill all your dreams, reach new heights and make your day to day journey of life joyful.</p>
                </div>

                <div className='md:flex lg:gap-10 gap-5 items-center justify-between my-10 text-center'>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>BDT 2 lacs- BDT 20 Lacs</h1>
                        <p>Loan amount</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>12 - 60 months</h1>
                        <p>Loan tenure</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>Competitive</h1>
                        <p>Interest rate</p>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <Heading heading= "Overview"></Heading>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input className='' type="radio" name="my-accordion-2" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                            Features
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <div className='md:ml-10 ml-5'>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Loan amounts from Tk. 50,000 to Tk. 20,00,000</p>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Flexible repayment option of 06 – 60 months</p>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No hidden charges</p>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Competitive interest rate</p>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Easy documentation and quick processing</p>
                                <p className='text-lg flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Option for early settlement</p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                        Processing Fee
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <p className='flex gap-2 items-center my-3'><BiSolidHandRight className='w-[25px] text-primary'/> please see the <Link 
                            to="https://drive.google.com/file/d/1aeWz8vvF7AJGSRG3lE9cRpom3la8b-OD/view?usp=drive_link" 
                            target="_blank" className='text-rose-700'>Schedule of Charges</Link></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Eligibility
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <h1 className='mb-4'><span className='font-bold text-xl'>Age:</span> Minimum 21 and maximum 65 years or retirement date whichever is earlier at the loan maturity</h1>
                            <div className='mb-5'>
                                <h1 className='font-bold text-xl mb-2'>Experience:</h1>
                                <ul className='ml-5 md:ml-10'>
                                    <li><span className='font-semibold'>Salaried person :</span>  1 year with 6 months permanent employment status</li>
                                    <li><span className='font-semibold'>Self employed :</span>  1 year of practice in the profession</li>
                                    <li><span className='font-semibold'>Businessperson :</span>   2 years of involvement in the same nature of business</li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold text-xl mb-2'>Monthly income criteria:</h1>
                                <ul className='ml-5 md:ml-10'>
                                    <li className='flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Minimum BDT 18,000 for Government staff</li>
                                    <li className=' flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Minimum BDT 20,000 for CEPP/Payroll/Salary with MTB</li>
                                    <li className=' flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Minimum BDT 30,000 for other salaried person</li>
                                    <li className=' flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Minimum BDT 50,000 for Self-employed</li>
                                    <li className=' flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Minimum BDT 50,000 for Businessperson/Land lord/Land lady/other income individuals</li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Required Documents
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <div className='flex gap-2 mb-1'>
                                <BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> 
                                <p>Download basic required documents for Personal Loan, please <Link 
                                to="https://drive.google.com/file/d/1Ai-vPQKmWeJv5UWRyjPV3NnlB8sPIrBC/view?usp=drive_link" 
                                target="_blank" className='text-rose-700 font-semibold'>Click here</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input type="radio" name="my-accordion-3"/> 
                        <div className="collapse-title text-xl font-medium">
                            Benefits Of Takeover Plan
                        </div>
                        <div className="collapse-content text-lg"> 
                            <ul className='ml-5 md:ml-10 mt-5'>
                                <li className='flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> No processing fee for loan takeover or balance transfer</li>
                                <li className=' flex gap-2 mb-1'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Approved loan amount may be higher than the takeover loan amount</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='p-2 '>
                    <h1 className='text-3xl md:text-5xl text-center my-5 md:my-10'>Interested to take a loan? 
                        <Link to="/dashboard/apply-loan"
                        className='mt-2 ml-3 px-5 py-2 border-spacing-2 border-2 text-xl md:text-2xl rounded border-primary text-primary font-bold hover:text-white hover:bg-primary'>
                            Get in touch
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default PersonalLoan;

// 
// https://i.ibb.co/55qsVTX/home-loan-banner.webp
// 
// 