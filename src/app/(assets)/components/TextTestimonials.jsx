
"use client"

import React from "react";
import "../styles/TextTestimonials.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { testimonialsData } from "../data/Data.js";
 



function TextTestimonials() {
  return (
    <>
      <div className="pt-5 my-home-bg custom-container ">
        <h2 className="text-center mb-0  main-heading">SATISFIED CLIENTS</h2>
        <div className=" custom-container px-3 px-lg-5 px-md-5">
          <div className="d-flex justify-content-center">
            <div className="divder-2"></div>
          </div>
        </div>
      </div>

      <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2200,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper swiper-cover-text-texti pb-5"
            >
              {testimonialsData.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className=" p-2 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                      <div className="testi-border ">
                        <div className="testi-img-back pt-3 pb-3">
                          <Image
                          style={{borderRadius: '50%', boxShadow: '1px 1px 22px white', marginTop: '0.7rem'}}
                            src={JSON.parse(JSON.stringify(testimonial.image))}
                            alt="myimage"
                          />
                        </div>
                        <div className="p-4 pt-2 m-h-280 d-flex flex-column justify-content-around ">
                          <p className="text-testi-p mt-2">
                            {testimonial.text}
                          </p>
                          <div>
                            <span className="text-testi-name">
                              {testimonial.name}
                            </span>
                            <br />
                            <span className="text-testi-prof">
                              {testimonial.profession}
                            </span>
                          </div>
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
    </>
  );
}

export default TextTestimonials;
