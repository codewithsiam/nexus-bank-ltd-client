import React, { useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "John Doe",
    role: "Designer",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s",
  },

  {
    name: "John Doe",
    role: "Designer",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s",
  },

  {
    name: "John Doe",
    role: "Designer",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s",
  },

  {
    name: "John Doe",
    role: "Designer",
    socialLinks: {
      facebook: "https://facebook.com/",
      twitter: "https://twitter.com/",
      instagram: "https://instagram.com/",
    },
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7GoLl5TulaocWLQ8pi__zObTN8Sj5PmFvec-6NEPb&s",
  },
];

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(-1);
  };

  return (
    <div className="h-max my-20">
       <p className='p-5 text-2xl font-bold text-center bg-gradient-to-l to-[#000000] via-[#038cc7] from-[#ffffff] bg-clip-text text-transparent'>
    OUR TEAM
      </p>

      <h2 className="text-5xl font-semibold w-[700px] text-center mx-auto mb-10">Leading the way in business transformation</h2>
      <div className="flex justify-center items-center h-max bg-white">
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers?.map((member, index) => (
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
                  src={member.image}
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#004d6e] via-transparent to-transparent"></div>
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex flex-col space-y-2">
                    {Object.entries(member.socialLinks).map(
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

                          {/* <img
                        src={`/path-to-${platform}-icon.png`}
                        alt={platform}
                        className='w-6 h-6'
                      /> */}
                        </Link>
                      )
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
                  <div className="flex flex-col space-y-2">
                    <p
                      className={`text-white font-semibold transition-all ${
                        hoveredIndex === index ? "line-animation" : ""
                      }`}
                    >
                      {member.name}
                      <span
                        className={`block w-0 h-0.5 bg-blue-500 ${
                          hoveredIndex === index ? "line-animation-bar" : ""
                        }`}
                      ></span>
                    </p>
                    <p className="text-gray-300">{member.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;