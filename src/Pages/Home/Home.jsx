import About from "./About/About";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import CreditCardPayment from "./CreditCardPayment/CreditCardPayment";
import LatestNews from "./LatestNews/LatestNews";
import OurServices from "./OurServices/OurServices";
import Testimonial from "./Testimonial/Testimonial";
import Comparison from "./Comparison/Comparison";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Lottie from "lottie-react";
import icon from '../../assets/animation/animation_lmhksght.json';
import RightMenu from "../../components/RightMenu/RightMenu";
import Subscribe from "../Shared/Footer/Subscribe";

const Home = () => {
  const ref = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

    useEffect(() => {
      const handleScroll = () => {
        // Check if the user has scrolled down more than a certain threshold (e.g., 100 pixels)
        if (window.scrollY > 150) {
          setShowTopBtn(true);
        } else {
          setShowTopBtn(false);
        }
      };
  
      // Attach the event listener
      window.addEventListener('scroll', handleScroll);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
      <div className="relative" >
        <Banner ></Banner>
        <About></About>
        <OurServices></OurServices>
        <LatestNews></LatestNews>
        <Comparison></Comparison>
        <Testimonial ></Testimonial>
        <CreditCardPayment />
        <ContactUs />
        <div className="flex justify-center items-center">
        {showTopBtn && (
          <button className="fixed bottom-5 right-24 z-50 h-12 w-12" onClick={scrollToTop}>
            <Lottie animationData={icon} />
          </button>
        )}
      </div>
    </div>
    );
};

export default Home;
