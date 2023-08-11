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
    <div className="mt-8 px-2">
      <div className="flex justify-between border-b-2 py-2">
        <Link>Home</Link>
        {expendHome !== true ? (
          <FaAngleDown onClick={() => setExpendHome(true)} />
        ) : (
          <FaAngleRight onClick={() => setExpendHome(false)} />
        )}
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>About Us </Link>
        {expendAbout !== true ? (
          <FaAngleDown onClick={() => setExpendAbout(true)} />
        ) : (
          <FaAngleRight onClick={() => setExpendAbout(false)} />
        )}
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>Service</Link>
        {expendService !== true ? (
          <FaAngleDown onClick={() => setExpendService(true)} />
        ) : (
          <FaAngleRight onClick={() => setExpendService(false)} />
        )}
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>Page</Link>
        {expendPage !== true ? (
          <FaAngleDown onClick={() => setExpendPage(true)} />
        ) : (
          <FaAngleRight onClick={() => setExpendPage(false)} />
        )}
      </div>
      <div className="flex justify-between border-b-2 py-2">
        <Link>Blog</Link>
        {expendBlog !== true ? (
          <FaAngleDown onClick={() => setExpendBlog(true)} />
        ) : (
          <FaAngleRight onClick={() => setExpendBlog(false)} />
        )}
      </div>
    </div>
  );
};

export default Menu;
