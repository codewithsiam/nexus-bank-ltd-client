import aboutImage from '../../../assets/images/About/about-us-image.png'
import { BiSupport } from 'react-icons/bi';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { BsCreditCard2FrontFill } from 'react-icons/bs';


const About = () => {
    return (
        <div className='bg-[#F7F9FA] py-24 px-3'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-5">
                    <div className="block lg:block md:hidden">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Instant Global Money Transfers</h1>
                        <p className='text-[#878796] mt-5 mb-7'>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
                        <div>
                            <div className='flex items-center gap-5'>
                                <div className='bg-[#0BC1BB] p-4 rounded-full'>
                                    <BiSupport size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Specialised Support Service</h3>
                                    <p className="text-[#878796] ">Specialised support services. Your care will be multi-disciplinary to ensure you can return to</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mt-6'>
                                <div className='bg-[#2C76E2] p-4 rounded-full'>
                                    <BsFillCalendar2CheckFill size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">Online Banking</h3>
                                    <p className="text-[#878796]">Access your accounts, transfer funds, pay bills, and manage your finances conveniently from the comfort of your home through our user-friendly online banking platform</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-5 mt-6'>
                                <div className='bg-[#FE94C4] p-4 rounded-full'>
                                    <BsCreditCard2FrontFill size={24} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold">24/7 Customer Support</h3>
                                    <p className="text-[#878796]">Have questions or need assistance? Our dedicated customer support team is available around the clock to help you with account inquiries.</p>
                                </div>
                            </div>
                        <div className='flex gap-[3px] md:gap-4 items-center my-btn py-2 px-1 md:py-2 md:px-5 text-white w-[70px] md:w-[100px] lg:w-[220px] animate-fade-right animate-infinite my-custom-animation'>
                            <h1 className='lg:text-5xl text-xl'>5</h1>
                            <p className='lg:text-2xl text-[10px]'>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <Link to={`aboutDetails`} className="my-btn text-white px-4 py-2 rounded">Read More</Link>
            </div>
        </div>
    );
};

export default About;