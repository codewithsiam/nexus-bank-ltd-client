import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import Marquee from "react-fast-marquee";
import Heading from '../../../Components/Title/Heading';

const newsData = [
  {
    title: 'New Banking Features Announced',
    content: 'We are excited to announce new features...',
  },
  {
    title: 'Financial Tips for a Secure Future',
    content: 'Learn how to manage your finances...',
  },
  {
    title: 'Global Economy Update: Q3 2023',
    content: 'Insights into the current global economy...',
  },
  {
    title: 'Technology Innovations Conference',
    content: 'Join us for a conference on the latest tech innovations...',
  },
  {
    title: 'Investment Strategies for Beginners',
    content: 'Learn the basics of investing and grow your wealth...',
  },
];

const LatestNews = () => {
  const [marqueeEnabled, setMarqueeEnabled] = useState(true);

  const handleCardClick = () => {
    setMarqueeEnabled(!marqueeEnabled);
  };

  return (
    <div className="bg-[#F7F9FA] py-8">
      <div className="container mx-auto">
        <div className='text-center'>
          <Heading
            heading={"Latest News"}
          ></Heading>
        </div>
        <Marquee speed={100} pauseOnHover={!marqueeEnabled}>
          {newsData.map((props, index) => (
            <div
              key={index}
              onClick={handleCardClick} 
              style={props}
              className="news-item px-4" 
            >
              <div className="flex bg-white border p-2 rounded-lg shadow-lg overflow-hidden">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 news-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div className="flex-1 p-6">
                  <p className="text-xl font-semibold text-gray-900">{newsData[index].title}</p>
                  <p className="mt-3 text-base text-gray-500">{newsData[index].content}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
