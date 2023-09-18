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
          <img className='h-[200px] md:h-[400px] lg:h-[500px]' src={slide.banner_img} alt={`Slide ${index}`} />
          <div className='text-left absolute top-[20%] left-0 text-white w-full lg:w-2/3 pl-14'>
            <div>
              {
                  slide.banner_text?<p className="text-[50px] ">{slide.banner_text}</p>:""
              }
              {
                  slide.banner_btn_text?
                  <Link to={slide.btn_link} target="_blank"
                  className="mt-5 btn hover:bg-slate-300 ">
                    {slide.banner_btn_text}
                  </Link>:""
              }
            </div>
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
// https://i.ibb.co/Bc4LqZS/6f0a5807-efbc-4b5c-ae7e-e37e6b9e0c1b.jpg
// https://i.ibb.co/QdJTXdc/14804b17-77db-4707-9f12-fd6f277fd416.jpg
// https://i.ibb.co/Sr4qtFB/aa92ba17-7633-47bb-8480-0be627f52c58.jpg
