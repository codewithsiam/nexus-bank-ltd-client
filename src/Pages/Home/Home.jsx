import Footer from "../Shared/Footer/Footer";
import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import LatestNews from "./LatestNews/LatestNews";
import OurServices from "./OurServices/OurServices";
import OurTeam from "./OurTeam/OurTeam";
import Testimonial from "./Testimonial/Testimonial";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
            <OurServices></OurServices>
            <CreditCardPayment />
            <ContactUs />
            <OurTeam></OurTeam>
            <WhyChooseUs></WhyChooseUs>
            <Footer />
        </div>
    );
};

export default Home;
