import React from 'react';
import CenterTitle from '../../Components/Title/CenterTitle';
import { RiPresentationLine } from "react-icons/ri";
import LoneCalculator from './LoneCalculator';
import LoneService from './LoneService';

const Lone = () => {
    return (
        <div className=''>
            <div className='bg-gray-100 '>
            <div className='w-full max-w-screen-xl mx-auto grid lg:grid-cols-2 md:gap-5 lg:gap-10 items-center mb-10 p-10'>
                <div>
                    <h1 className='lg:text-5xl md:text-3xl text-xl font-bold md:mb-5 mb-3'>Simplify all your banking and loan methods.</h1>
                    <p>Our team of experts uses a methodology to identify the credit cards most.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5 items-center'>
                    <div className='flex flex-col lg:flex-col items-center justify-center gap-5'>
                        <img className='w-full animate-pulse animate-twice' src="https://i.ibb.co/C6LNcV7/lone-total.png" alt="" />
                        <img className='my-custom-animation' src="https://i.ibb.co/mvYnCNZ/lone-graf.png" alt="" />
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-full' src="https://i.ibb.co/86mvYYz/lone-banner.webp" alt="" />
                    </div>
                </div>
            </div>
            </div>
            <div className='w-full max-w-screen-xl mx-auto '>
                <div>
                    <CenterTitle heading={"Here's how it works"} ></CenterTitle>
                    <p className='text-center'>When you're ready, Cardinal Loans is ready too - 24 hours a day, 7 days a week.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5 lg:gap-10 mt-5 mb-3'>
                    <div className='card shadow-lg bg-gray-100 rounded-xl overflow-hidden'>
                        <div className='flex gap-5 items-center bg-primary text-white p-5'>
                            <div className=''>
                                <RiPresentationLine className='text-4xl md:text-5xl'/>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-xl lg:text-3xl font-semibold">Apply Online</h2>
                                <p>That is why we have a wide range of you can apply for a Personal Loan.</p>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>1</p>
                                <p>Apply Online</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>2</p>
                                <p>Enter Your Informantion - 10 min</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>3</p>
                                <p>Pre-qualify / Pre-Approve - 5 min</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>4</p>
                                <p>Prepare for help you</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>5</p>
                                <p>We help your qualify - 15 days</p>
                            </div>
                        </div>
                    </div>
                    <div className='card shadow-lg bg-gray-100 rounded-xl overflow-hidden'>
                        <div className='flex gap-5 items-center bg-primary text-white px-5 py-3'>
                            <div className=''>
                                <RiPresentationLine className='text-4xl md:text-5xl'/>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-xl lg:text-3xl font-semibold">Consultation</h2>
                                <p>Nexus Guide on the supervisory approach to consolidation in the banking sector.</p>
                            </div>
                        </div>
                        <div className='px-5'>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>1</p>
                                <p>Schedule a Free Consulation</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>2</p>
                                <p>Discuss your Situation</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>3</p>
                                <p>We Review your condition & find a solution</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>4</p>
                                <p>Prepare for help you</p>
                            </div>
                            <div className='flex gap-4 lg:gap-5 items-center my-5'>
                                <p className='bg-primary rounded-full px-3 py-1 text-white'>5</p>
                                <p>We help your qualify - 15 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                <LoneService/>
                <LoneCalculator/>
            </div>
        </div>
    );
};

export default Lone;