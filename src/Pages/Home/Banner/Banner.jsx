import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { fadeIn } from "../../../variants";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <div className='pt-20 md:pt-0'>
            <Carousel>
            <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="">
            <div className='relative flex justify-center items-center '>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>WELCOME TO MUSICINE</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Learning Music With Easy Way</h1>
                    <a href='#' className='my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider1.jpg' />
            </div>
            </motion.div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl'>Best places for</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Music education</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider2.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>If music is your world</p>
                    <h1 className='text-xl md:text-7xl my-4 font-bold'>Do not miss the chance</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider3.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>Music for everyone</p>
                    <h1 className='text-xl md:text-7xl  my-4 font-bold'>Start with a note</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider1.jpg' />
            </div>
            <div className='relative flex justify-center items-center'>
                <div className='absolute text-white font-bold'>
                    <p className='text-lg md:text-2xl text-tertiary'>Best places for</p>
                    <h1 className='text-xl md:text-7xl  my-4 font-bold'>Music education</h1>
                    <a href='#' className=' my-btn'>Start Learning</a>
                </div>
                <img src='https://raw.githubusercontent.com/Rukshanarupu/assignment-image-link/main/Assignment-12-img/slider2.jpg' />
            </div>
        </Carousel>
        </div>
    );
};

/** 
<div className="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
                
                <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{minHeight: '320px'}}>
                    <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{minHeight: '320px'}}>
                        <div className="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
                    </div>
                <div className="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
                    
                    <svg className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
                <button className="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
                    <span className="block" style={{transform: 'scale(-1)'}}>&#x279c;</span>
                </button>
                <button className="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
                    <span className="block">&#x279c;</span>
                </button>
                </div>
                
                <div className="flex items-center pt-5 justify-between">
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{maxHeight: "60px"}}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{maxHeight: "60px"}}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{maxHeight: "60px"}}/></button>
                <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{maxHeight: "60px"}}/></button>
                <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img className="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{maxHeight: "60px"}}/></button>
                </div>
                
            </div>

*/


export default Banner;