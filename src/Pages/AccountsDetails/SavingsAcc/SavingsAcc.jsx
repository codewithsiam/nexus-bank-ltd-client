import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan/Loan.css"
import { Link } from 'react-router-dom';
import Heading from '../../../Components/Title/Heading';

const SavingsAcc = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] lg:h-[400px] bg-image bg-[url(https://i.ibb.co/jrxmx5v/savings-acc-banner-5.jpg)]'>
                <div className='grid lg:grid-cols-2 w-full max-w-screen-xl mx-auto'>
                    <div className=' text-white bg-[rgb(0,0,0,.5)] md:p-10 p-5'>
                        <h1 className='flex gap-2 items-center text-xl lg:text-2xl font-bold mb-3'> Accounts <PiCaretDoubleRightDuotone className=''/> Savings Account</h1>
                        <p>Saving for the arrival of your baby, a new car, a well-deserved holiday.</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <p className='text-xl lg:text-3xl'>Want to grow your money? Nurture your savings to secure your future here we are partnering with you to grow your deposit.</p>
                </div>
                <div className='md:flex lg:gap-10 gap-5 items-center justify-between my-10 text-center'>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>NexusmaxX Card</h1>
                        <p>Cashback Facility</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>Nexustouch</h1>
                        <p>Digital Banking Service</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>Instant Debit Card & Locker Facility</h1>
                        <p>Other Facilities</p>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                    <Heading heading= "Overview"></Heading>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input className='' type="radio" name="my-accordion-4"/> 
                        <div className="collapse-title text-xl font-medium">
                            Features
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <ul className=' lg:ml-10 ml-5'>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> A regular transactional account offering interest on your deposit</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> SMS banking facility</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Digital banking facility</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> VISA Debit Card facility and Cash withdrawal from all Bank's ATM throughout the country is free of charge. (For Student-Savings Account, minimum age of minor for debit card issuance is 12 years)</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> For Student-Savings Account - Account maintenance fee, SMS alert fee, Debit card fee and Closing charge is free.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            Eligibility
                        </div>
                        <div className="collapse-content mt-4 text-lg lg:flex justify-between"> 
                            <ul className='ml-5 lg:ml-10'>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Any Bangladeshi Citizen with valid NID (National ID Card)</li>
                                <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Having age 18 years or above</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            Interest Rate
                        </div>
                        <div className="collapse-content text-lg mt-4"> 
                            <p  className=' flex gap-2 items-center my-4 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> Please see the<Link 
                            to="https://drive.google.com/file/d/1_uFR4tZZb9BdnzYdO7pNvo0uTfeLxX_y/view?usp=sharing" 
                            className='text-rose-700' target='_blank'>here</Link></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            Required Documents
                        </div>
                        <div className="collapse-content text-lg"> 
                            <ul className='ml-5 lg:ml-10'>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Photo of Applicant - 2 copies.</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Copy of National ID/Smart ID of the Applicant.</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Birth Certificate</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> If NID /Smart ID is not available, introducer is mandatory and account can be opened by using applicant’s any of these documents (verified by original copy).</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> </li>
                                <p className='font-bold'>** Bank may ask any additional document if required.</p>
                            </ul>
                            <h1 className='font-bold mt-4'>Nominee:</h1>
                            <ul className='ml-5 lg:ml-10'>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> 1 copy of photo</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Photocopy of any ID</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Legal guardian’s Photo ID and Photograph (If nominee is minor)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='p-2 md:flex justify-center items-center my-5 md:my-10'>
                    <h1 className='text-3xl md:text-5xl text-center'>Interested to open an account?</h1>
                    <div className='flex justify-center'>
                        <Link to="/saving-account"
                        className='btn w-[270px] flex items-center gap-2 mt-2 ml-3 px-5 py-2 border-spacing-2 border-2 text-xl md:text-2xl rounded-lg text-white bg-primary font-bold hover:text-white hover:bg-primary hover:shadow-md'>
                            <p className=''>Get in touch</p> 
                            <img className='w-[30px]' src="https://i.ibb.co/gM9BjSZ/apply-icon.png" alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SavingsAcc;