import React, { useEffect, useState } from 'react';
import { baseUrl } from '../../../config/server';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/get-banner`)
      .then((res) => res.json())
      .then((data) => setBanners(data))
      .catch((error) => console.error(error));
  }, []);

  const carouselSettings = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    interval: 3000,
    showThumbs: false,
  };

  return (
    <Carousel {...carouselSettings}>
      {banners.map((slide, index) => (
        <div key={index} className='relative '>
          <img className='h-[200px] md:h-[400px] lg:h-[600px]' src={slide.banner} alt={`Slide ${index}`} />
          <div className='absolute bottom-[12.25rem] left-[9.25rem]'>
            <h1>{slide.banner_text}</h1>
            {
                slide.banner_btn_text?<Link className="btn hover:bg-slate-300 ">{slide.banner_btn_text}</Link>:""
            }
            
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;

// https://i.ibb.co/xJf4D25/slide-4.jpghttps://i.ibb.co/34PV8VJ/1672566501.jpg
// https://i.ibb.co/k49WtR7/slide-1-without-text.jpg
// https://i.ibb.co/HF8vGXS/slide-2-without-text.jpg
// https://i.ibb.co/LSGHCt1/slide-3-without-text.jpg
// https://i.ibb.co/hBCgmrx/slide-4-without-text.jpg
