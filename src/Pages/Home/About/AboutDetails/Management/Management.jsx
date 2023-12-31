import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import MainBanner from "../../../../../Components/Banner/MainBanner";
import { baseUrl } from "../../../../../config/server";
import Heading from "../../../../../Components/Title/Heading";


const Management = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const directors = useLoaderData();
  const [employees,setEmployees] = useState([]);

  useEffect(()=>{
    fetch(`${baseUrl}/employees`)
    .then(res=>res.json())
    .then(data=>setEmployees(data))
  },[])
  // console.log(employees)

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className=" mt-10">
      <MainBanner 
      banner="https://i.ibb.co/fXKszF9/management-bg.webp" 
      subBannerTitle="Leading the way in business transformation"
      bannerTitle="Management Committee">
      </MainBanner>
      <div className="text-center">
      <Heading heading={"Board of Directors"}></Heading>
      </div>
      <div className="flex justify-center items-center h-max bg-white">
        <div className="flex flex-wrap justify-center gap-8">
          {directors?.map((director, index) => (
            <div
            key={index}
            className={`relative group flex-shrink-0 w-64 overflow-hidden ${
              index % 2 !== 0 ? 'mt-10' : 'mb-8'
            }`}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverEnd}
            >
              <div className="h-80 rounded-lg overflow-hidden relative">
                <img
                  className="object-cover h-full w-full transition-transform transform-gpu group-hover:scale-105"
                  src={director.image}
                  alt={director.name}
                />
                <div className="absolute  inset-0 bg-gradient-to-t from-[#004d6e] via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex flex-col space-y-2">
                    {Object.entries(director.socialLinks).map(
                      ([platform, link], i) => (
                        <Link
                          key={platform}
                          to={link}
                          className={`opacity-0 transition-opacity ${
                            hoveredIndex === index
                              ? "group-hover:opacity-0 animate-social-links"
                              : ""
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            animationDelay: `${
                              hoveredIndex === index ? i * 0.1 : 0.5
                            }s`,
                          }}
                        >
                          <div
                            className={`${
                              platform === "facebook" ? "block" : "hidden"
                            } p-2 bg-white text-black rounded-lg hover:from-[#004d6e] hover:to-[#29b1eb] hover:bg-gradient-to-r`}
                          >
                            <FaFacebookF className="text-black" />
                          </div>

                          <div
                            className={`${
                              platform == "twitter" ? "block" : "hidden"
                            } p-2 bg-white text-black rounded-lg hover:from-[#004d6e] hover:to-[#29b1eb] hover:bg-gradient-to-r`}
                          >
                            <FaTwitter />
                          </div>
                          <div
                            className={`${
                              platform == "instagram" ? "block" : "hidden"
                            } p-2 bg-white text-black rounded-lg hover:from-[#004d6e] hover:to-[#29b1eb] hover:bg-gradient-to-r`}
                          >
                            <FaInstagram />
                          </div>
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 w-max text-center left-1/2 transform -translate-x-1/2 p-4">
                  <div className="flex flex-col space-y-2">
                    <p
                      className={`text-white font-semibold transition-all ${
                        hoveredIndex === index ? "line-animation" : ""
                      }`}
                    >
                      {director.name}
                      <span
                        className={`block w-0 h-0.5 bg-blue-500 ${
                          hoveredIndex === index ? "line-animation-bar" : ""
                        }`}
                      ></span>
                    </p>
                    <p className="text-gray-300">{director.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-[2px] my-5 text-primary bg-primary"/>
    
      <div className="text-center mt-10">
      <Heading heading={"Team Members"}></Heading>
      </div>
      <div className="flex justify-center items-center h-max bg-white">
        <div className="flex flex-wrap justify-center gap-8">
          {employees?.map((member, index) => (
         <div
         key={index}
         className={`relative group flex-shrink-0 w-64 overflow-hidden ${
           index % 2 !== 0 ? 'mt-10' : 'mb-8'
         }`}
         onMouseEnter={() => handleHover(index)}
         onMouseLeave={handleHoverEnd}
       >
              <div className="h-80 rounded-lg overflow-hidden relative">
                <img
                  className="object-cover h-full w-full transition-transform transform-gpu group-hover:scale-105"
                  src={member?.image}
                  alt={member?.name}
                />
                <div className="absolute  inset-0 bg-gradient-to-t from-[#004d6e] via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex flex-col space-y-2 text-left">
                    <div 
                    className={`opacity-0 transition-opacity ${
                      hoveredIndex === index
                        ? "group-hover:opacity-0 animate-social-links"
                        : ""
                    }`}
                    // rel="noopener noreferrer"
                    style={{
                      animationDelay: `${
                        hoveredIndex === index ? i * 0.1 : 0.5
                      }s`,
                    }}
                    >
                      <div className="bg-gray-50 px-2">
                      <p>{member?.email}</p>
                      <p>{member?.phoneNumber}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 w-max text-center left-1/2 transform -translate-x-1/2 p-4">
                  <div className="flex flex-col space-y-2">
                    <p
                      className={`text-white font-semibold transition-all ${
                        hoveredIndex === index ? "line-animation" : ""
                      }`}
                    >
                      {member?.firstName}
                      <span
                        className={`block w-0 h-0.5 bg-blue-500 ${
                          hoveredIndex === index ? "line-animation-bar" : ""
                        }`}
                      ></span>
                    </p>
                    <p className="text-gray-300">{member?.designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Management;