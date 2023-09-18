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
import Footer from "../Shared/Footer/Footer";

const Home = () => {
  const ref = useRef(null);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative" >
      <Banner ></Banner>
      <RightMenu />
      <About></About>
      <OurServices></OurServices>
      <LatestNews></LatestNews>
      <Comparison></Comparison>
      <Testimonial ></Testimonial>
      <CreditCardPayment />
      <ContactUs />
      <div className="flex justify-center items-center">
        <Link to={'/chat'} className=" fixed bottom-5 right-10 z-50 text-red-500"><img
          className="w-12"
          src="https://i.ibb.co/FxwYW6L/messenger-icon-free-png.webp" alt="" /></Link>
        {
          <button className="fixed bottom-5 right-24 z-50 h-12 w-12" onClick={scrollToTop}><Lottie animationData={icon}></Lottie></button>
        }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
