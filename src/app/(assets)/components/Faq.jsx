"use client";

import React from "react";
import "../styles/TextTestimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { faqData } from "../data/Data.js";

function Faq() {
  return (
    <>
      <div className="pt-5 my-home-bg custom-container px-3 ">
        <h2 className="text-center mb-0  main-heading">
          FREQUENTLY ASKED QUESTIONS
        </h2>
      </div>

      <div className="my-home-bg pt-3 custom-container px-3 px-lg-5 px-md-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper swiper-cover-text-texti pb-3"
            >
              {faqData.map((data, index) => (
                <SwiperSlide key={index}>
                  <div className=" p-2 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-8 col-12 text-center ">
                      <div className="testi-border ">
                        <div className="testi-img-back p-4">
                          <span className="q-faq">{data.question}</span>
                        </div>
                        <div className="p-4 pt-2 m-h-200 d-flex flex-column justify-content-around ">
                          <p className="text-testi-p mt-2">{data.answer}</p>
                          <div></div>
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

export default Faq;
