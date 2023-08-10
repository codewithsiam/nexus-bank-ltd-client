import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
 
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = () => {
    return (
        <div className=" text-white ">
            <AutoplaySlider className=""
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={4000}
            >
                <div 
                // data-src="bg-gradient-to-r from-sky-500 to-blue-800 opacity-80" 
                className="grid md:grid-cols-2 items-center gap-10 container mx-auto ">
                    <div>
                        <h2 className="text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-7xl font-semibold mt-3 mb-5">Our mission is your financial success</h1>
                        <p>And In Order To Make A Business, Brand Advertising And Marketing Plays An Important </p>
                        <button className="btn rounded">Get started</button>
                    </div>
                    <div className="items-end flex">
                        <img className="rounded-t-full" src="https://i.ibb.co/ft8yhWW/banner-img-1.jpg" alt="" />
                    </div>
                </div>
                <div 
                // data-src="https://i.ibb.co/m0pkkFz/banner-img-2.jpg" 
                data-src="https://i.ibb.co/g99WwV8/shape-bg.png" >

                </div>
                <div data-src="https://i.ibb.co/gMhM45Q/banner-img-3.jpg" />
            </AutoplaySlider>
        </div>
    );
};

export default Banner;
