import React, { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './CustomSwiper.css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { AuthContext } from '../../../providers/AuthProvider';
import { baseUrl } from '../../../config/server';
import CenterTitle from '../../../Components/Title/CenterTitle';

const Testimonial = () => {
  const {user}=useContext(AuthContext)
  // console.log(user)
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`${baseUrl}/user-reviews`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

  // console.log(reviews)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf key="half" />);
    }

    return stars;
  };

  return (
    <div className='bg-[#F6F6F9] relative h-auto overflow-hidden py-10 px-4'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='absolute top-[15%] -right-[30rem] md:-top-[10%] lg:-top-[20%] lg:-right-[25rem]  z-[1] my-btn origin-bottom rotate-[32deg] w-[1070px]'>
          <img className='w-[100%] h-auto' src="https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/bg-shape.png" alt=""/>
        </div>
      
        <CenterTitle
          subHeading={"CLIENTS TESTiMONIAL"}
          heading={"Unleashing the power of your business"}
        ></CenterTitle>

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{clickable: true}}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            }
          }}
        >
          {/* <div className="swiper-button-prev my-custom-prev-button"></div>
          <div className="swiper-button-next my-custom-next-button"></div> */}
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='lg:flex md:flex gap-5 items-center mt-5 bg-white rounded-xl overflow-hidden shadow-xl'>
                <div className='flex justify-center flex-shrink-0'>
                <img className='' src={review.image} alt="alt" />
                </div>
                <div className='px-5 w-full'>
                  <div className='text-primary mb-5'>
                    <span className="flex items-center">
                      {renderStars(review.rating)}
                    </span>
                  </div>
                  <p>{review.feedback}</p>
                  <h1 className='text-[16px] font-bold mt-4'>{review.name}</h1>
                  <div className='flex justify-between w-full'>
                    <p>{review.profession}</p>
                    <h1 className='font-bold text-[14px]'>{review.date}</h1>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
