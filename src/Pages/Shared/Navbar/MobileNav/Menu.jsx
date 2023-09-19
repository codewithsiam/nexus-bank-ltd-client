import React from "react";
import { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Menu = () => {
  // expend menu -
  const [expendHome, setExpendHome] = useState(false);
  const [expendAbout, setExpendAbout] = useState(false);
  const [expendService, setExpendService] = useState(false);
  const [expendPage, setExpendPage] = useState(false);
  const [expendBlog, setExpendBlog] = useState(false);
  const [expendContact, setExpendContact] = useState(false);
  return (
    <div data-testid="nav-menu" className="mt-8 px-2">
      <div className="flex justify-between border-b-2 py-2">
        <Link>Home</Link>
        {expendHome === true ? (
          <FaAngleDown onClick={() => setExpendHome(false)} />
        ) : (
          <FaAngleRight onClick={() => setExpendHome(true)} />
        )}
      </div>
      <div className="border-b-2 py-2">
        <Link to='/dashboard'>Dashboard</Link>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>About Us </Link>
        {expendAbout === true ? (
          <FaAngleDown onClick={() => setExpendAbout(false)} />
        ) : (
          <FaAngleRight onClick={() => setExpendAbout(true)} />
        )}
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
            <Link className="border-b-2">Service</Link>
            <Link className="border-b-2">Service details</Link>
          </div>
        )}
       </div>
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>Page</Link>
        {expendPage === true ? (
          <FaAngleDown onClick={() => setExpendPage(false)} />
        ) : (
          <FaAngleRight onClick={() => setExpendPage(true)} />
        )}
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>Blog</Link>
        {expendBlog === true ? (
          <FaAngleDown onClick={() => setExpendBlog(false)} />
        ) : (
          <FaAngleRight onClick={() => setExpendBlog(true)} />
        )}
      </div>
    </div>
  );
};

export default Menu;