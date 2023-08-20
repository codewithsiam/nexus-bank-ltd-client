import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtonLeft = () => {
  const [expendService, setExpendService] = useState(false);

  // use defined ------------------------------------
  const user = "admin";
  return (
    <div className="flex gap-6 font-semibold">
      <Link>Home</Link>
      <Link to="/aboutDetails">About Us</Link>
      <div className="relative group">
        <Link className="flex gap-1 items-center">
          Cards <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Debit Card</Link>
        <Link>Credit Card</Link>
        <Link>Payroll Card</Link>
        <Link>Service 1</Link>
      </div>
      </div>
      <div className="relative group">
        {
          user === "admin"? <Link to='/dashboard/adminDashboard'>Dashboard</Link>:<Link to='/dashboard/my-profile'>My Profile</Link>
        }
      </div>
      <div className="relative group">
        <Link className="flex gap-1 items-center">
          Banking <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Digital Banking</Link>
        <Link>NRB Banking</Link>
      </div>
      </div>
      <div className="relative group">
        <Link className="flex gap-1 items-center">
          Lone <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Student Lone</Link>
        <Link>Personal Lone</Link>
        <Link>Installment Lone</Link>
      </div>
      </div>
      <Link to='/contact'>Contact</Link>
    </div>
  );
};

export default ButtonLeft;

// thats great