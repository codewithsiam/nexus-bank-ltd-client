import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import './CustomSwiper.css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonialData = [
  {
    id: 1,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer"
  },
  {
    id: 2,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-2.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer"
  },
  {
    id: 3,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-1.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer"
  },
  {
    id: 4,
    imageSrc: 'https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/img-2.jpg',
    comment: "Don't just take our word for it hear what our customers have to say about us! we have helped thousand people Don't just take our",
    author: "Hardli sefa",
    authorTitle: "customer"
  },
];

const Testimonial = () => {
  return (
    <div className='bg-[#F6F6F9] relative h-[400px] overflow-hidden'>
      <div className='container mx-auto'>
      <div className='absolute top-[20%] -right-20 z-[1] nav-btn origin-bottom rotate-45 '>
        <img className='w-[100%] h-auto' src="https://template.wphix.com/finbest-prv/finbest/assets/img/testimonial/bg-shape.png" alt=""/>
      </div>

      <Swiper
        slidesPerView={2}
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
            slidesPerView: 2,
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
            <div className='flex gap-5'>
              <div></div>
              <img src={testimonial.imageSrc} alt="alt" />
              <div>
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
