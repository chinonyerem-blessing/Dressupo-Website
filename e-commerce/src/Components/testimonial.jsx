// Import React and testimonial data
import React from "react";
import testimonials from "../jsComponents/testimonial";

// Import Swiper components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <div>
      <div>
        {/* Customer testimonial heading */}
        <div className="customers">
          <h3 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">This Is What Our Customers Says</h3>
          <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">Here are some of the testimonials from our satisfied customers.</p>
        </div>

        {/* Display testimonials using Swiper */}
        <div>
          <Swiper data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200"
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/* Loop through all testimonials */}
            {testimonials.map((item) => (
              <SwiperSlide data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" key={item.id}>
                <div className="myTestContainer1">
                  <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="myTestContainer">

                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="item1">{item.review}</p>

                    <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="item4">{item.rating}</p>

                    {/* Customer image and details */}
                    <div className="myReview">
                      <div>
                        <img data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="myTestImg" src={item.image} />
                      </div>
                      <div className="myReview2">
                        <h4 data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="item2">{item.name}</h4>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200" className="item3">{item.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Testimonial;