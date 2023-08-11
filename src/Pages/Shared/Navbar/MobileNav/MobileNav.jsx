import React from "react";
import { useState } from "react";
import { FaList } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="flex justify-between h-20 md:h-32">
        <div className="w-1/2 nav-left flex  items-center ">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10"
              src="https://i.ibb.co/Xzt8GjV/png-clipart-white-bank-illustration-online-banking-finance-icon-white-bank-building-building-black-w.png"
              alt=""
            />
            <h2 className="text-3xl font-semibold text-white">NEXUS</h2>
          </div>
        </div>

        <div className="w-1/2 flex justify-end items-center align-middle">
          <div className="p-6 md:p-14 bg-[#F6F6F9]">
            <FaList
              onClick={() => setShowMenu(true)}
              className="text-2xl md:text-3xl text-[#009BBB]"
            />
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </div>
  );
};

export default MobileNav;
