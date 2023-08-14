import { FaArrowRight } from "react-icons/fa";
import NavMiddle from "./NavMiddle/NavMiddle";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  /* const {user} = useContext(AuthContext);
  console.log(user) */

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      {windowWidth < 1024 ? <MobileNav /> :
        <div className="flex justify-between h-32">

          <div className="xl:w-[500px] 2xl:w-[600px] nav-left flex justify-center items-center " >
            <div className="flex items-center gap-2">
              <img className="w-10 h-10" src='https://i.ibb.co/Xzt8GjV/png-clipart-white-bank-illustration-online-banking-finance-icon-white-bank-building-building-black-w.png' alt="" />
              <h2 className="text-3xl font-semibold text-white">NEXUS</h2>
            </div>
          </div>
          <div className="w-full">
            <NavMiddle />
          </div>
          <div className="xl:w-[500px] 2xl:w-[600px] bg-[#F4F5FA] flex justify-center items-center">
            <Link to='/registration'>
              <button className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center nav-btn">Registration<FaArrowRight /> </button>
            </Link>
          </div>
        </div>
      }
    </div>

  );
};

export default Navbar;