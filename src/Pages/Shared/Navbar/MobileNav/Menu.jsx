import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  // expend menu -
  const [expendService, setExpendService] = useState(false);

  return (
    <div data-testid="nav-menu" className="mt-8 px-2">
      <div className="flex justify-between border-b-2 py-2">
        <Link>Home</Link>
      </div>
      <div className="border-b-2 py-2">
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link to="/about-details">About Us </Link>
      </div>
      <div>
        <div className="flex justify-between border-b-2 py-2">
          <Link>Services</Link>
          {expendService === true ? (
            <FaAngleDown onClick={() => setExpendService(false)} />
          ) : (
            <FaAngleRight onClick={() => setExpendService(true)} />
          )}
        </div>
       <div>
       {expendService && (
          <div className="ps-4 py-2 flex flex-col space-y-2 ">
            <Link to="/nexus-accounts" className="border-b-2">Accounts</Link>
            <Link to="/retail-loan" className="border-b-2">Loan</Link>
          </div>
        )}
       </div>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link to="/contact">Page</Link>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link to="/careers">Careers</Link>
      </div>
    </div>
  );
};

export default Menu;