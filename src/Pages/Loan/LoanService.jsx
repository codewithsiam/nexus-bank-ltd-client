import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../Components/Title/Heading';
import { TbArrowBigRightLineFilled } from 'react-icons/tb';

const LoanService = () => {
    return (
        <div className="bg-[#7cacc4] rounded mt-10 mb-5 pb-10 py-5">
            <div className='text-center'>
            <Heading heading={"We offer different types of loan"} ></Heading>
            </div>
            <div className="grid md:grid-cols-3 md:gap-3 lg:gap-6 mt-4 w-full max-w-screen-xl mx-auto">
                <div className="pb-10 card loan-service relative bg-white text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/V3Rycr3/personal-loan-services.webp"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Personal Loan</h3>
                        <p className='paragraph text-left mb-5'>An Nexus Personal Loan is your one-stop-solution for all your financial needs to fulfill any of your desires.</p>
                        <div className=''>
                            <Link to="/dashboard/apply-loan" 
                            className='absolute bottom-3 md:bottom-[51px] lg:bottom-3 left-[15px] md:left-[55px] lg:left-[15px] text-white bg-primary font-bold px-5 rounded py-2'>Apply Now</Link>
                            <Link to="/business-loan" className='absolute bottom-3 right-[15px] md:right-[55px] lg:right-[15px] text-primary font-bold py-1 px-5 flex gap-2 items-center border border-primary'>Learn More
                                <TbArrowBigRightLineFilled/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card loan-service relative bg-white text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/WF8PmT3/student-loan-service.jpg"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Student Loan</h3>
                        <p className='paragraph text-left mb-16 md:mb-5'>Help Child to grow a habit of savings for a secure future.</p>
                        <div className=''>
                            <Link to="/dashboard/apply-loan" 
                            className='absolute bottom-3 md:bottom-[51px] lg:bottom-3 left-[15px] md:left-[55px] lg:left-[15px] text-white bg-primary font-bold px-5 rounded py-2'>Apply Now</Link>
                            <Link to="/business-loan" className='absolute bottom-3 right-[15px] md:right-[55px] lg:right-[15px] text-primary font-bold py-1 px-5 flex gap-2 items-center border border-primary'>Learn More
                                <TbArrowBigRightLineFilled/>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="card loan-service relative bg-white  text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/3N8sTkt/business-loan-service.jpg"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Business Loan</h3>
                        <p className='paragraph text-left mb-16 md:mb-[58px] lg:mb-5'>Help Child to grow a habit of savings for a secure future.</p>
                        <div className=''>
                            <Link to="/dashboard/apply-loan" 
                            className='absolute bottom-3 md:bottom-[51px] lg:bottom-3 left-[15px] md:left-[55px] lg:left-[15px] text-white bg-primary font-bold px-5 rounded py-2'>Apply Now</Link>
                            <Link to="/business-loan" className='absolute bottom-3 right-[15px] md:right-[55px] lg:right-[15px] text-primary font-bold py-1 px-5 flex gap-2 items-center border border-primary'>Learn More
                                <TbArrowBigRightLineFilled/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 
// https://i.ibb.co/S6mVxsk/professional-loan-service.webp
// 

export default LoanService;