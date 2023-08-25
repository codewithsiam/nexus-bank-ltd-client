import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './CustomSwiper.css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import TitleGroup from '../../../Components/Title/TitleGroup';

const testimonialData = [
  {
    id: 1,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer",
    rating: 4
  },
  {
    id: 2,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-2.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer",
    rating: 4.5
  },
  {
    id: 3,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer",
    rating: 3.5
  },
  {
    id: 4,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-2.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer",
    rating: 4
  },
];
// console.log(testimonialData)

const Testimonial = () => {

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
    <div className='bg-[#F6F6F9] relative h-[550px] overflow-hidden py-10 px-4'>
      <div className='container mx-auto'>
        <div className='absolute top-[15%] -right-[30rem] md:-top-[10%] lg:-top-[20%] lg:-right-[25rem]  z-[1] my-btn origin-bottom rotate-[32deg] w-[1070px]'>
          <img className='w-[100%] h-auto' src="https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/bg-shape.png" alt=""/>
        </div>
      
        <TitleGroup
          subHeading={"CLIENTS TESTiMONIAL"}
          heading={"Unleashing the power of your business"}
        ></TitleGroup>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        // navigation={
          // {nextEl: '.my-custom-next-button',prevEl: '.my-custom-prev-button'}
          // {clickable: true}}
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
        {testimonialData?.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className='flex lg:flex md:flex-none gap-5 items-center mt-5 bg-white rounded-xl overflow-hidden shadow-xl'>
              <img src={testimonial.imageSrc} alt="alt" />
              <div >
                <div className='text-orange-500 mb-5'>
                  <span className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </span>
                </div>
                <p>{testimonial.comment}</p>
                <h1 className='text-xl font-bold mt-4'>{testimonial.author}</h1>
                <p>{testimonial.authorTitle}</p>
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
