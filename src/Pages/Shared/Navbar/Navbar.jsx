import { FaArrowRight  } from "react-icons/fa";
import { AiOutlineLogout } from "react-icons/ai";
import NavMiddle from "./NavMiddle/NavMiddle";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // logout
  const handleLogout = () => {
    logout();
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div>
      {windowWidth < 1160 ? <MobileNav /> :
        <div className="flex justify-between h-32"> 
          <div className="lg:w-[400px] xl:w-[500px] 2xl:w-[600px] nav-left flex justify-center items-center " >
            <div className="flex items-center gap-2">
                  <Link to="/"><img className="w-32" src='https://i.ibb.co/GsDWGkj/logo.png' alt="" /></Link>
                  {/* <h2 className="text-3xl font-semibold text-white">NEXUS</h2> */}
            </div>
          </div>
          <div className="w-full">
            <NavMiddle />
          </div>
          <div className=" lg:w-[400px] xl:w-[500px] 2xl:w-[600px] bg-[#F4F5FA] flex justify-center items-center">
            {
              user ?
                <button onClick={handleLogout} className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center bg-red-500"> <AiOutlineLogout size={24}/> Logout</button>
                :
                <Link to='/login'>
                  <button className="px-8 py-3 text-white font-semibold rounded-full flex gap-2 items-center my-btn">Login<FaArrowRight /> </button>
                </Link>
            }
          </div>
        </div>
      }
    </div>

  );
};

export default Navbar;