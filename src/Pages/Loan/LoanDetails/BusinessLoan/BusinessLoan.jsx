import React from 'react';
import { PiCaretDoubleRightDuotone } from 'react-icons/pi';
import { BiSolidHandRight } from 'react-icons/bi';
import "../../Loan.css"
import Heading from '../../../../Components/Title/Heading';
import { Link } from 'react-router-dom';

const BusinessLoan = () => {
    return (
        <div>
            <div className='flex items-center h-[200px] md:h-[300px] bg-image bg-[url(https://i.ibb.co/QJd5RKW/business-loan-banner.webp)]'>
                <div className='w-full max-w-screen-xl mx-auto text-white'>
                    <h1 className='text-3xl mb-3'>Ready to dream</h1>
                    <p className='flex gap-2 items-center text-xl font-bold'>Retail Lone <PiCaretDoubleRightDuotone className=''/> Business Lone</p>
                </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto'> 
                <div className='text-center my-10'>
                    <p className='text-xl md:text-3xl'>Available for small sized businesses operating in trading, manufacturing, services, non-farm activity, agriculture and agro-based industries, City SME Small Loan offers flexibility and convenience to help you grow your business.</p>
                </div>
                <div className='md:flex lg:gap-10 gap-5 items-center justify-between my-10 text-center'>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>BDT 3 - 25 lacs</h1>
                        <p>for unsecured loans</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>BDT 10 lacs - 1 crore</h1>
                        <p>for secured loans</p>
                    </div>
                    <div className='bg-[#C4E2F7] hover:shadow-lg hover:rounded-xl p-10 mb-5'>
                        <h1 className='text-[30px] text-primary'>12 - 60 months</h1>
                        <p>Loan tenure</p>
                    </div>
                </div>

                <div>
                    <div className='text-center'>
                    <Heading heading= "Overview"></Heading>
                    </div>
                    <div className="collapse collapse-arrow ">
                        <input className='' type="radio" name="my-accordion-4" checked="checked" /> 
                        <div className="collapse-title text-xl font-medium">
                            Features
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <div className='mb-5'>
                                <h1 className='font-bold text-xl mb-2'>Loan amount ranging from:</h1>
                                <ul className=' lg:ml-10 ml-5'>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> BDT 3,00,000 to 25,00,000 for Unsecured loans</li>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> BDT 10,00,000 to 100,00,000 for Secured loans</li>
                                </ul>
                            </div>
                            <div className='mb-5'>
                                <h1 className='font-bold text-xl mb-2'>Loan tenure:</h1>
                                <ul className=' lg:ml-10 ml-5'>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Term Loan: 12 to 60 months (Unsecured Loan 12 to 36 months)
    </li>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> OD: To be renewed annually</li>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Single Installment Loan: 3 to 9 months</li>
                                    <li className='flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Quick approval process</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="collapse collapse-plus ">
                        <input className='' type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Processing Fee
                        </div>
                        <div className="collapse-content mt-4 text-lg"> 
                            <p className='flex gap-2 items-center my-3 lg:ml-10 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/>No processing fees</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Eligibility
                        </div>
                        <div className="collapse-content mt-4 text-lg lg:flex justify-between"> 
                            <div className=''>
                                <div className='mb-5'>
                                    <h1 className=' mb-2'><span className='font-bold text-xl'>Who can apply:</span> Any credit worthy Bangladeshi in the following professions as self-employed or salaried people:</h1>
                                    <ul className='ml-5 lg:ml-10'>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Doctors or medical professionals</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Engineers</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Architects</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Chartered Accountants</li>
                                    </ul>
                                </div>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-xl mb-2'>Experience:</h1>
                                    <ul className='ml-5 lg:ml-10'>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> 1 year of experience for salaried professionals</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> 2 years of practice for self employed professionals</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <h1 className='mb-4'><span className='font-bold text-xl'>Age:</span> Minimum 22 and maximum 65 years or retirement date whichever is earlier at the loan maturity</h1>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-xl mb-2'>Monthly income criteria:</h1>
                                    <ul className='ml-5 md:ml-10'>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> BDT 25,000 per month for salaried professionals</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> BDT 40,000 per month for self employed professionals</li>
                                    </ul>
                                </div>
                                <div className='mb-5'>
                                    <h1 className='font-bold text-xl mb-2'>Loan Amounts and Tenor:</h1>
                                    <ul className='ml-5 md:ml-10'>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Loan amount Tk. 50,000 to Tk. 10,00,000</li>
                                        <li className=' flex gap-2 items-center mb-1'><BiSolidHandRight className='w-[25px] text-primary'/> Repayment Tenor 12 – 60 months</li>
                                    </ul>
                                </div>
                            </div>
                            <h1>** For details, please contact with nearest Nexus Bank SME Unit Office.</h1>
                        </div>
                    </div>
                    <div className="collapse collapse-plus">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Cluster Financing Policy
                        </div>
                        <div className="collapse-content text-lg mt-4"> 
                            <p  className=' flex gap-2 items-center my-4 ml-5'><BiSolidHandRight className='w-[25px] text-primary'/> Please see the<Link 
                            to="https://drive.google.com/file/d/1ubwkUJI1VQSqDSfspxvhyMy--mNcUzJE/view?usp=sharing" 
                            className='text-rose-700' target='_blank'>Cluster Financing Policy</Link></p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-3" /> 
                        <div className="collapse-title text-xl font-medium">
                            Benefits Of Takeover Plan
                        </div>
                        <div className="collapse-content text-lg"> 
                            <ul className='ml-5 lg:ml-10'>
                                <li  className=' flex gap-2 my-4'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> No processing fee for loan takeover or balance transfer</li>
                                <li  className=' flex gap-2 my-4'><BiSolidHandRight className='mt-1 flex-shrink-0 w-[25px] text-primary'/> Approved loan amount may be higher than the takeover loan amount</li>
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

export default BusinessLoan;