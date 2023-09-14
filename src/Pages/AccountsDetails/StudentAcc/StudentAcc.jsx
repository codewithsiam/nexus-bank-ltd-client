import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan/Loan.css"
import { Link } from 'react-router-dom';
import Heading from '../../../Components/Title/Heading';

const StudentAcc = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] lg:h-[400px] bg-image bg-[url(https://i.ibb.co/VtkQPTg/student-acc-banner.jpg)]'>
                <div className='grid lg:grid-cols-2 w-full max-w-screen-xl mx-auto'>
                    <div className=' text-white bg-[rgb(0,0,0,.5)] md:p-10 p-5'>
                        <h1 className='flex gap-2 items-center text-xl lg:text-2xl font-bold mb-3'> Accounts <PiCaretDoubleRightDuotone className=''/> Current Account</h1>
                        <p>Students can use for their educational purpose.</p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <p className='text-xl lg:text-3xl'>NBL Current Account gives you an array of services like online banking from any NBL Branch in Bangladesh, access to Internet banking as well as cheque book and debit card facility. With unlimited transaction facility, this is truly your best choice to conduct your day to day transaction.</p>
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
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Attractive Interest Rate</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Interest Will Be Calculated On Daily Balance & Disbursed Half Yearly</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Free Cheque Book Facilities</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Free Debit Card.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Free Internet Banking</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No need to download any separate app for account opening.</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No Account Maintenance Fee</li>
                                <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> No Initial Deposit Amount Only BDT 100</li>
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
                            to="https://drive.google.com/file/d/1Ai-vPQKmWeJv5UWRyjPV3NnlB8sPIrBC/view?usp=drive_link" 
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
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Current Valid Student Photo ID / Certificate from Head of Educational Institution with Photo/Current Valid Passport.</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Birth Certificate/student ID card with birth certificate.</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> National ID / Current valid passport / Birth Certificate (with additional photo ID) of the Guardian.</li>
                                <li  className=' flex gap-2 my-2'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Document supporting source of fund of the guardian.</li>
                                <p className='font-bold'>** Bank may ask any additional document if required.</p>
                            </ul>
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

export default StudentAcc;


// https://i.ibb.co/7vbNK8K/savings-acc-banner.jpg