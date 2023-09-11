import React from 'react';
import { Link } from 'react-router-dom';
import CenterTitle from '../../Components/Title/CenterTitle';

const LoneService = () => {
    return (
        <div className="bg-[#F7F9FA] rounded py-10 w-full max-w-screen-xl mx-auto">
            <CenterTitle heading={"We offer different types of lone"} ></CenterTitle>
            <div className="grid md:grid-cols-3 md:gap-3 lg:gap-6 mt-4">
                <div className="pb-10 card lone-service relative bg-white text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/V3Rycr3/personal-loan-services.webp"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Personal Lone</h3>
                        <p className='paragraph mb-2'>An Nexus Personal Loan is your one-stop-solution for all your financial needs to fulfill any of your desires.</p>
                        <div className='absolute bottom-3 right-[15px] hidden lone-btn'>
                            <Link to="/personal-lone" className='text-primary font-bold pl-5'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="card lone-service relative bg-white text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/WF8PmT3/student-lone-service.jpg"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Student Lone</h3>
                        <p className='paragraph mb-5'>Help Child to grow a habit of savings for a secure future.</p>
                        <div className='absolute bottom-5 right-[15px] hidden lone-btn'>
                            <Link to="/student-lone" className='text-primary font-bold pl-5'>Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="card lone-service relative bg-white  text-black rounded-lg hover:shadow-lg hover:shadow-blue-300 text-center">
                    <div class="relative bg-cover bg-no-repeat mb-4">
                        <img
                        src="https://i.ibb.co/3N8sTkt/business-lone-service.jpg"
                        class="w-full h-[200px] hover:scale-100"
                        alt="Louvre" />
                        <div
                        class="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-blue-800 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50"></div>
                    </div>
                    <div className='px-5'>
                        <h3 className="text-2xl font-semibold heading mb-2">Business Lone</h3>
                        <p className='paragraph mb-5'>Help Child to grow a habit of savings for a secure future.</p>
                        <div className='absolute bottom-5 right-[15px] hidden lone-btn'>
                            <Link to="/business-lone" className='text-primary font-bold pl-5'>Learn More</Link>
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

export default LoneService;