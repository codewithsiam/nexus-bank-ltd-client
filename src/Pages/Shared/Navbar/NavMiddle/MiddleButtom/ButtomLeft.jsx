import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const ButtomLeft = () => {
  const [expendService, setExpendService] = useState(false);
  return (
    <div className="flex gap-6 font-semibold">
      <div className="relative group">
      <Link className="flex items-center gap-1">Home <FaAngleDown /></Link>
      <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Our Client</Link>
        <Link>Testimonial</Link>
        <Link>???????</Link>
        <Link>???????</Link>
      </div>
      </div>
      <Link>About Us</Link>
      <div className="relative group">
        <Link className="flex gap-1 items-center">
          Services <FaAngleDown />
        </Link>
        <div className="absolute  transform -translate-x-1/2 opacity-0 bg-white  rounded-md   w-40 px-4 pb-4 pt-8  transition-opacity duration-300 group-hover:opacity-100 z-30 left-20  flex flex-col space-y-3">
        <Link>Service 1</Link>
        <Link>Service 1</Link>
        <Link>Service 1</Link>
        <Link>Service 1</Link>
      </div>
      </div>
      <Link>Blog</Link>
      <Link>Contact</Link>
    </div>
  );
};

export default ButtomLeft;
