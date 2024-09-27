import React, { Suspense } from "react";
import BelowCover from "./BelowCover";
import "../styles/Home.css";
import Testimonials from "./Testimonial-button";
import "../styles/Sessions.css";
import "../styles/Gtraining.css";
import "../styles/AboutCover.css";
import Counter2 from "./Counter2";
import "../styles/ImgAnimation.css";
import Image from "next/image";
import AllServicesSwiper from "./AllServicesSwiper";
import TextTestimonials from "./TextTestimonials";
import Loader from "../pages/Loader";
import Link from "next/link";
import AboutCover from "./about/AboutCover";
const VideoReuse = React.lazy(() => import("./VideoReuse"));

function ServicesReusable({
  images,
  sessionContent,
  keyFeatures,
  keyBenefits,
  targetAudience,
}) {
  return (
    <>
      <AboutCover images={images} />

      <BelowCover />

      <div className="custom-container px-3 px-lg-5 px-md-5">
        <h2 className="my-m mb-0 text-center sessions-m-heading">
          {sessionContent.title}
        </h2>
        <div className="sessions-m-divider"></div>
        <div className="d-flex justify-content-center align-items-center">
          <Image
            style={{
              display: "block",
              width: "95%",
              maxWidth: "600px",
              height: "100%",
              objectFit: "cover",
              marginTop: "1rem",
            }}
            src={JSON.parse(JSON.stringify(sessionContent.image))}
            alt="cover"
          />
        </div>
      </div>

      <div className="custom-container px-3 px-lg-5 px-md-5">
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
            <p>{sessionContent.description} </p>
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-0 text-center  px-3 px-lg-5 px-md-5  session-tagline pt-2">
        {sessionContent.tagline}
      </h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5 bg-red-theme">
        <div className="d-flex justify-content-center ">
          <div
            className="divder-3"></div>
        </div>
      </div>
      <div className="pt-3 bg-red-theme"></div>

      <div className=" custom-container px-3 px-lg-5 px-md-5 mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-3">
            <div className="image-class">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={JSON.parse(JSON.stringify(images[0]))}
                alt="cover"
              />
            </div>
          </div>

          <div className="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-0">Key Features</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              {keyFeatures.map((feature, index) => (
                <li key={index} className="mb-1">
                  <strong>{feature.title}</strong> <>{feature.description}</>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-4 row justify-content-center flex-column-reverse  flex-sm-column-reverse flex-lg-row  flex-md-column-reverse  align-items-center">
          <div className="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-0">Key Benefits</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              {keyBenefits.map((feature, index) => (
                <li key={index} className="mb-1">
                  <strong>{feature.title}</strong> <>{feature.description}</>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-3 ">
            <div className="image-class">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={JSON.parse(JSON.stringify(images[1]))}
                alt="cover"
              />
            </div>
          </div>
        </div>

        <div className="my-m row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-4">
            <div className="image-class">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={JSON.parse(JSON.stringify(images[2]))}
                alt="cover"
              />
            </div>
          </div>

          <div className="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="m-0">Target Audience</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              {targetAudience.map((feature, index) => (
                <li key={index} className="mb-1">
                  <strong>{feature.title}</strong> <>{feature.description}</>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-5 mt-5 pb-5  custom-container px-3 px-lg-5 px-md-5 reg-btn text-center">
        <Link href="/contact" target="_blank" className="coaching-session-btn2">
          Register now
        </Link>
      </div>

      <div className="my-p"></div>
      <div className="my-p"></div>

      <div className=" my-p"></div>

      <Counter2 />

      <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
        <div className="mt-3 pb-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" col-12 col-md-10 co-sm-12 col-lg-8">
              <Suspense fallback={<Loader />}>
                <VideoReuse
                  link={"https://www.youtube.com/embed/O6EmGo1K0rY"}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />
      <TextTestimonials />
      <div
        className=" custom-container pt-3 px-3 px-lg-5 px-md-5"
        style={{ backgroundColor: "black" }}
      >
        <h2 className="pt-5 mb-0 text-center main-heading-swip pb-2">
          Life Mastery - Mind Mastery
        </h2>
        <div className="d-flex justify-content-center ">
          <div className="divder-2"></div>
        </div>
      </div>

      <AllServicesSwiper />
    </>
  );
}

export default ServicesReusable;
