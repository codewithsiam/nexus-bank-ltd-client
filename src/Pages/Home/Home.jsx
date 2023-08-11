import About from "./About/About";
import Banner from "./Banner/Banner";
import LatestNews from "./LatestNews/LatestNews";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
            <WhyChooseUs></WhyChooseUs>
            
        </div>
    );
};

export default Home;
