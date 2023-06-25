import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {

    const settings ={
        dots: true,
        infinite: true,
        autoplay: true,
        speed : 100 ,
        swipeTOSlide: true,
        autoplaySpeed : 2000 ,
        slidesToShow : 3 ,
        responsive: [
            {
                breakpoint: 992 ,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                    infinite: true,
                    dots: true,
            },
        },
        {
            breakpoint: 576 ,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
        },
    },

        ]

    }
  return (
    <Slider {...settings}>
      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>John Smith</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>Tessa Hardin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>Hero Finness</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava01} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>John Smith</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava02} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>Tessa Hardin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>


      <div className='testimonial py-4 px-3'>
        <p>
          "I had an amazing experience with flight travel! 
          From the moment I boarded the plane, the staff provided 
          exceptional service and made me feel comfortable throughout 
          the journey. The smooth takeoff and landing added to the overall pleasant 
          experience. I highly recommend flight travel for its efficiency, convenience,
           and the ability to reach destinations quickly. It was truly a remarkable way to travel!"
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
          <img src={ava03} className='w-25 h-25 rounded-2' alt=' ' />
          <div>
            <h5 className='mb-0 mt-3'>Hero Finness</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

    </Slider>
  );
};

export default Testimonial;
