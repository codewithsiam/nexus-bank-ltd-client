import Footer from "../Shared/Footer/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import LatestNews from "./LatestNews/LatestNews";
import OurServices from "./OurServices/OurServices";
import OurTeam from "./OurTeam/OurTeam";
import Testimonial from "./Testimonial/Testimonial";
import Comparison from "./Comparison/Comparison";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative">
            <Banner></Banner>
            <About></About>
            <OurServices></OurServices>
            <LatestNews></LatestNews>
            <Comparison></Comparison>
            <Testimonial></Testimonial>
            <CreditCardPayment/>
            <ContactUs />
            <Footer/>
            <Link to={'/chat'} className=" fixed bottom-5 right-10 z-50 text-red-500"><img
            className="w-12"
            src="https://i.ibb.co/FxwYW6L/messenger-icon-free-png.webp" alt="" /></Link>
        </div>
    );
};

export default Home;
