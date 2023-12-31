import React from "react";
import Menu from "./Menu";
import Contact from "./NavContact";
import NavContact from "./NavContact";

const MobileMenu = ({ setShowMenu }) => {
  return (
    <div className="bg-white mobile-menu  h-[100vh] w-full md:w-96 absolute z-20 top-0 p-6 transition-transform transform duration-300 ">
      <div className="flex justify-between">
        <div>
          <div className=" flex items-center ">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10"
                src="https://i.ibb.co/m5zVJR1/nexus-bank-logo.png"
                alt=""
              />
              <h2 className="text-3xl font-semibold text-black">NEXUS</h2>
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowMenu(false)}
            className="bg-[#F6F6F9] p-3 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* menus ----------------- */}
      <div>
        <Menu />
      </div>
      <div>
        <NavContact />
      </div>
    </div>
  );
};

export default MobileMenu;
