import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';

const Banner = () => {
  const carousel = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='bg-[#16243E] text-white'>
        <div className="carousel-container w-full max-w-screen-xl mx-auto py-10 md:py-20">
        <Slider {...carousel}>
            {/* Slide 1 */}
            <div className="slide-container">
                <div className="grid md:grid-cols-2 items-center gap-10">
                    <div className="">
                        <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">
                            Our mission is your financial success
                        </h1>
                        <p className="mb-5">
                            And In Order To Make A Business, Brand Advertising And Marketing Plays An Important
                        </p>
                        <button className="text-white bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-5 rounded">
                            Get started
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="rounded-t-full " src="https://i.ibb.co/ft8yhWW/banner-img-1.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* Slide 2 */}
            <div className="slide-container">
            <div className="grid md:grid-cols-2 items-center gap-10">
                <div className="">
                    <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">
                        Smart finance solutions for your business
                    </h1>
                    <p className="mb-5">
                        And In Order To Make A Business, Brand Advertising And Marketing Plays An Important
                    </p>
                    <button className="text-white bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-5 rounded">
                        Get started
                    </button>
                </div>
                <div className="flex items-center justify-center">
                    <img className="rounded-t-full " src="https://i.ibb.co/m0pkkFz/banner-img-2.jpg" alt="" />
                </div>
            </div>
            </div>

            {/* Slide 3 */}
            <div className="slide-container">
                <div className="grid md:grid-cols-2 items-center gap-10">
                    <div className="">
                        <h2 className="text-md md:text-2xl font-bold">Be Invest</h2>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-3 mb-5">
                            Our mission is your financial success
                        </h1>
                        <p className="mb-5">
                            And In Order To Make A Business, Brand Advertising And Marketing Plays An Important
                        </p>
                        <button className="text-white bg-gradient-to-r from-[#004D6E] to-[#00ACCC] py-2 px-5 rounded">
                            Get started
                        </button>
                    </div>
                    <div className="flex items-center justify-center">
                        <img className="rounded-t-full " src="https://i.ibb.co/gMhM45Q/banner-img-3.jpg" alt="" />
                    </div>
                </div>
            </div>

            {/* Add more slide items as needed */}
        </Slider>
        </div>
    </div>
  );
};

export default Banner;
