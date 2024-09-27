
"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "../styles/AllServicesSwiper.css";
import Image from "next/image";
 

const images = [
  require("../assets/images/mockups/wellness-coaching.webp"),
  require("../assets/images/mockups/sussess-coaching.webp"),
  require("../assets/images/mockups/prooductivity.webp"),
  require("../assets/images/mockups/reshape-your-life.webp"),
  require("../assets/images/mockups/erasing-painful-memories.webp"),
];

function AllServicesSwiper() {
  return (
    <>
      <div className="custom-container" style={{ backgroundColor: "black" }}>
        <div className=" custom-container px-4 px-lg-5 px-md-5 ">
          <div className="row justify-content-center align-items-center g-2">
            <div className="col-12">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 2200,
                  disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="mySwiper swiper-cover-AllServicesSwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index} className="slides">
                    <Image
                      src={JSON.parse(JSON.stringify(image))}
                      style={{
                        display: "block",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt="cover images"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllServicesSwiper;
