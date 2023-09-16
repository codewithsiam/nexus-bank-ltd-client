import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan.css"
import Heading from '../../../../Components/Title/Heading';
import { Link } from 'react-router-dom';

const StudentLoan = () => {
    return (
        <div className=''>
            <div className='flex items-center h-[200px] md:h-[300px] bg-image bg-[url(https://i.ibb.co/k3PmmyK/Nbl-education-loan-banner.jpg)]'>
                <div className='w-full max-w-screen-xl mx-auto'>
                    <h1 className='text-3xl mb-3'>Ready to dream</h1>
                    <p className='flex gap-2 items-center text-xl font-bold'>Retail Lone <PiCaretDoubleRightDuotone className=''/> Student Lone</p>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <p className='text-xl md:text-3xl'>Loan provided for education purpose, which may include tuition fees, living expense, medical insurance, airfare and other associated costs.</p>
                </div>
                <div className='md:flex lg:gap-10 gap-5 items-center justify-between my-10 text-center'>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>BDT 1 Lac to BDT 20 Lac</h1>
                        <p>Loan Amount</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>1 to 5 Years</h1>
                        <p>Tenor</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>Allowable after 3 months</h1>
                        <p>Top-Up</p>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                        <Heading heading= "Overview"></Heading>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input className='' type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Purpose
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <p className='flex gap-2 mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/>Education Loan may be availed by any student of Bangladeshi National with excellent educational track record to provide financial assistance for further educational purposes like study in abroad or within the country</p>
                            <p className='flex gap-2 mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/>To pursue higher studies for undergraduate courses (general/technical) in home and post-graduate courses in home and abroad.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input className='' type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Features
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <h1>NBL Education loan is a secured/unsecured terminating loan (EMI based) and Over Draft (revolving) facilities to enable the intending loanees to bear the educational expenses of their sons/ daughters/ relatives or for self-education</h1>
                            <ul className=' lg:ml-10 m-5'>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> <span className='font-bold hidden md:block'>Loan Amount:</span> 100,000 BDT to 2,000,000 BDT</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> <span className='font-bold hidden md:block'>Tenor:</span> 1 to 5 Years</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> <span className='font-bold hidden md:block'>Top Up::</span> Allowable after 3 months (Minimum BDT 1 Lac)</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> No hidden charges</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> No Competitive interest rate</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> No Easy documentation and quick processing</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> No Option for early settlement</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Eligibility
                        </div>
                        <div className="collapse-content mt-4 text-lg lg:flex justify-between">
                            <div className=''>
                                <h1 className='mb-4'><span className='font-bold text-xl'>Age:</span> Age Minimum 22 and maximum 65 years or retirement date whichever is earlier at the loan maturity</h1>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-xl mb-2'>Experience:</h1>
                                    <ul className='ml-5 md:ml-10'>
                                        <li><span className='font-semibold'>Salaried person :</span>  1 year with 6 months permanent employment status</li>
                                        <li><span className='font-semibold'>Self employed :</span>  1 year of practice in the profession</li>
                                        <li><span className='font-semibold'>Businessperson :</span>   2 years of involvement in the same nature of business</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='mb-4'><span className='font-bold text-xl'>Applicant:</span> Parent/s of the student or Legal Guardian</h1>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-xl mb-2'>Monthly income criteria:</h1>
                                    <ul className='ml-5 md:ml-10'>
                                        <li className=' flex gap-2 mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> Minimum BDT 30,000 per month for salaried professionals</li>
                                        <li className=' flex gap-2 mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> Minimum BDT 40,000 for Landlord person/Land lady</li>
                                        <li className=' flex gap-2 mb-1'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> Minimum BDT 60,000 for Businessperson/other income individuals</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Required Documents
                        </div>
                        <div className="collapse-content text-lg mt-4"> 
                            <div className=' flex gap-2 items-center my-4 ml-5'>
                                <BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> 
                                <p>Download basic required documents for Student Loan, please 
                                <Link target="_blank" 
                                to="https://drive.google.com/file/d/1yjhKcccso6SbsmWUivA5tViLGynCfXgz/view?usp=sharing" 
                                className='text-rose-700 ml-2 font-semibold'>Click here
                                </Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Benefits Of Takeover Plan
                        </div>
                        <div className="collapse-content text-lg"> 
                            <ul className='ml-5 lg:ml-10'>
                                <li  className=' flex gap-2 items-center my-4'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> No processing fee for loan takeover or balance transfer</li>
                                <li  className=' flex gap-2 items-center mt-4'><BiSolidHandRight className='w-[25px] text-primary flex-shrink-0'/> Approved loan amount may be higher than the takeover loan amount</li>
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

export default StudentLoan;