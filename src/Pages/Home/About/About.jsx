import { TbSquareRounded } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import TitleGroup from '../../../Components/Title/TitleGroup';

const About = () => {
    return (
        <div className="container mx-auto mb-10 mt-20 grid md:grid-cols-2 gap-10">
            <div className="">
                <div className="md:flex">
                    <img className="w-[400px] md:w-[300px] lg:w-[450px]" src="https://i.ibb.co/vqNFFDS/about-one.jpg" alt="" />
                    <div>
                        <div className='flex gap-[3px] md:gap-4 items-center my-btn py-2 px-1 md:py-2 md:px-5 text-white w-[70px] md:w-[100px] lg:w-[220px] animate-fade-right animate-infinite my-custom-animation'>
                            <h1 className='lg:text-5xl text-xl'>5</h1>
                            <p className='lg:text-2xl text-[10px]'>Years of Experience</p>
                        </div>
                        <img className="w-[50px] lg:w-[100px]" src="https://i.ibb.co/5BMPfh5/about-right-shape-2.png" alt="" />
                    </div>
                </div>
                <div className="hidden md:flex md:-mt-20 lg:-mt-32 items-end">
                    <img className="w-[100px] lg:w-[175px] mt-20 md:mr-5 lg:mr-10" src="https://i.ibb.co/BZx3JZn/about-left-shape-1.png" alt="" />
                    <img className="md:w-[230px] lg:w-[300px]" src="https://i.ibb.co/sFZBGzh/about-two.jpg" alt="" />
                </div>
            </div>
            <div className="bg-[url('https://i.ibb.co/5FWTNWH/bg-right-text.png')]">
                <div>
                    <TitleGroup 
                        subHeading={"About Us"}
                        heading={"Solutions that make a difference"}
                    ></TitleGroup>
                    <p>Payment solutions enable businesses to accept payments Payment stions enable businesses to accept payments from ctly customers ctly securely. stions enable businesses to accept payments from ctly customers ctly securely.</p>
                </div>
                <div className="grid lg:grid-cols-2 my-5">
                    <div className="flex gap-1 items-center">
                        <TbSquareRounded /> <p>Mistakes To Avoid to dum Auam.</p>
                    </div>
                    <div className="flex gap-1 items-center mb-2">
                        <TbSquareRounded /> <p>Avoid to the dumy mistakes</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <TbSquareRounded /> <p>Your Startup industry stan</p>
                    </div>
                    <div className="flex gap-1 items-center">
                        <TbSquareRounded /> <p>Our Startup industry Here</p>
                    </div>
                </div>
                <Link to={`aboutDetails`} className="my-btn text-white px-4 py-2 rounded">Read More</Link>
            </div>
        </div>
    );
};

export default About;