import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className="w-full h-full p-16 bg-[#F5FAFF]">
      <h3 className="font-bold text-lg mb-5">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 to-cyan-500">
          CLIENTS TESTOMONIAL
        </span>
      </h3>
      <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold space-y-6 mb-6">
        Unleashing The Power of <br className="pb-4" />
        Your Business
      </h1>
      <div className="flex flex-col md:flex-row gap-5">
        <div>
          <div className="flex items-center gap-5 border  rounded-md bg-white">
            <img
              className="h-72 rounded-md w-1/3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpOu09VxvyBOUjgqRG5o0mKJleYKIPNvcpw&usqp=CAU"
              alt=""
            />
            <div className="space-y-3 p-4">
              <div className="flex gap-1">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStarHalf className="text-yellow-500"></FaStarHalf>
              </div>
              <p>
                Don't just take our word for it hear what our customers have to
                say about us! we have helped thousand people Don't just take our{" "}
              </p>
              <h2 className="font-bold text-lg">Manik Bro</h2>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-5 border  rounded-md bg-white">
            <img
              className="h-72 rounded-md w-1/3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLy0iBBKr839kRpNKRTr4nh7y-uMIeqgboOH6-O-9h&s"
              alt=""
            />
            <div className="space-y-3 p-4">
              <div className="flex gap-1">
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStar className="text-yellow-500"></FaStar>
                <FaStarHalf className="text-yellow-500"></FaStarHalf>
              </div>
              <p>
                Don't just take our word for it hear what our customers have to
                say about us! we have helped thousand people Don't just take our{" "}
              </p>
              <h2 className="font-bold text-lg">Siam Bro</h2>
              <p>Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
