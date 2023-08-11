import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className=" text-white ">
            <AutoplaySlider className="h-[750px]"
                animation="cubeAnimation"
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            > 
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                    <div className='pt-[100px] md:pt-[0px]'>
                        <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">Our mission is your financial success</h1>
                        <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important </p>
                        <button 
                        className=" bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://i.ibb.co/ft8yhWW/banner-img-1.jpg" alt="" />
                    </div>
                </div>
                
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                <div className='pt-[100px] md:pt-[0px]'>
                        <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">Our mission is your financial success</h1>
                        <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important </p>
                        <button 
                        className=" bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://i.ibb.co/m0pkkFz/banner-img-2.jpg" alt="" />
                    </div>
                </div>
                <div data-src="https://i.ibb.co/g99WwV8/shape-bg.png" className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                <div className='pt-[100px] md:pt-[0px]'>
                        <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">Our mission is your financial success</h1>
                        <p className="mb-5">And In Order To Make A Business, Brand Advertising And Marketing Plays An Important </p>
                        <button 
                        className="nav-btn py-2 px-5 rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://i.ibb.co/gMhM45Q/banner-img-3.jpg" alt="" />
                    </div>
                </div>
            </AutoplaySlider>
        </div>
    );
};

export default Banner;
