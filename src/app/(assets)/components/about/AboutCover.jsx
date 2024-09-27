
"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/AllServicesSwiper.css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
function AboutCover({images}) {
  return (
    <div className=" mycover">
      <div className="w-100">
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-12">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 1700,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper swiper-cover-AllServicesSwiper "
            >
              {images.map((image, index) => (
                <SwiperSlide className="slides">
                  <Image
                    style={{
                      display: "block",
                      width: "90%",
                      maxWidth: "500px",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    key={index}
                    src={JSON.parse(JSON.stringify(image))}
                    alt={` ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCover;
