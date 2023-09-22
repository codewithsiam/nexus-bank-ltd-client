import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan/Loan.css"
import { Link } from 'react-router-dom';
import Heading from '../../../Components/Title/Heading';

const CurrentAcc = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] lg:h-[400px] bg-image bg-[url(https://i.ibb.co/HrgYCjp/current-acc-banner.jpg)]'>
                <div className='grid lg:grid-cols-2 w-full max-w-screen-xl mx-auto'>
                    <div className=' text-white bg-[rgb(0,0,0,.5)] md:p-10 p-5'>
                        <h1 className='flex gap-2 items-center text-xl lg:text-2xl font-bold mb-3'> Accounts <PiCaretDoubleRightDuotone className=''/> Current Account</h1>
                        <p>A non interest bearing account offering full transactional benefits and convenience</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <p className='text-xl lg:text-3xl'>NBL Current Account gives you an array of services like online banking from any NBL Branch in Bangladesh, access to Internet banking as well as cheque book and debit card facility. With unlimited transaction facility, this is truly your best choice to conduct your day to day transaction.</p>
                </div>
                <div className='text-center'>
                    <Heading heading="Benefits"></Heading>
                </div>
                <div className='bg-[#edf0f3] lg:flex lg:gap-10 gap-5 items-center justify-around text-center text-md'>
                    <div className=' hover:shadow-md hover:rounded-xl p-5 mb-5 flex md:flex-col items-center gap-5'>
                        <div>
                            <p className='text-gray-600'>Withdraw or Deposit</p>
                            <h1 className='my-5 font-bold text-4xl text-primary'>Freely</h1>
                        </div>
                        <p className='text-lg'>with a transaction account that guarantees your convenience</p>
                    </div>
                    <div className='md:flex lg:gap-10 gap-5 items-center justify-around '>
                        <div className='hover:shadow-md hover:rounded-xl p-5 mb-5 flex md:flex-col items-center gap-5'>
                            <div>
                                <p className='text-gray-600'>With</p>
                                <h1 className='my-5 font-bold text-4xl text-primary'>Zero</h1>
                            </div>
                            <p className='text-lg'>average balance fee</p>
                        </div>
                        <div className='hover:shadow-md hover:rounded-xl p-5 mb-5 flex md:flex-col items-center gap-5'>
                            <div>
                                <p className='text-gray-600'>And</p>
                                <h1 className='my-5 font-bold text-4xl text-primary'>Zero</h1>
                            </div>
                            <p className='text-lg'>counter transaction fees</p>
                        </div>
                    </div>
                </div>

                <div className='lg:flex w-full justify-center'>
                <div className='flex-col lg:w-[50%] w-full justify-center'>
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
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Real time account opening through a secured digital process. No need to physically visit any branch or agent banking centers.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No introducer required to open this account.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Account number will be shared instantly with customer via SMS and email right away</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Instant Debit card, cheque book request & internet banking access.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Debit card will be sent directly to customer’s address. Moreover, debit card will be FREE for the first year.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No need to download any separate app for account opening.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Existing customer of MTB can also open this account.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
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
                    <div className="collapse collapse-arrow">
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
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-4" /> 
                        <div className="collapse-title text-xl font-medium">
                            Fees and Charges
                        </div>
                        <div className="collapse-content text-lg mt-4"> 
                            <ul className='ml-5 lg:ml-10'>
                                <li  className=' flex gap-2 items-center my-2 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> A/C maintenance fees : tk. 500 half yearly</li>
                                <li  className=' flex gap-2 items-center my-2 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> Cheque book fee: Tk. 7/leaf</li>
                                <li  className=' flex gap-2 items-center my-2 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> Debit card fee : Tk. 600</li>
                                <li  className=' flex gap-2 items-center my-2 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> Closing charge: Tk. 300</li>
                            </ul>

                            <p  className='flex gap-2 items-center my-2 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> You can also visit<Link 
                            to="https://drive.google.com/file/d/1aeWz8vvF7AJGSRG3lE9cRpom3la8b-OD/view?usp=drive_link" 
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
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> NID/Birth certificate/Passport</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Photograph – 2 Copies</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Nominee photograph – 1 Copy</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Nominee’s NID/Birth certificate/Passport</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Income source document</li>
                                <p className='font-bold'>** Bank may ask any additional document if required.</p>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                <div className='p-2 md:flex justify-center items-center my-5 md:my-10'>
                    <h1 className='text-3xl md:text-5xl text-center'>Interested to open an account?</h1>
                    <div className='flex justify-center'>
                        <Link to="/current-account"
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

export default CurrentAcc;