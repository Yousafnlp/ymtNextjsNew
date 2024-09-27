import React from "react";
import "../styles/Home.css";
import YousafIntro from "../components/about/YousafIntro";
import MyLifeStory from "../components/about/MyLifeStory";
import CclientsLogos from "../components/CclientsLogos";
import Experiance from "../components/about/Experiance";
import Testimonials from "../components/Testimonial-button";
import TextTestimonials from "../components/TextTestimonials";
import MainTrainingPics from "../components/MainTrainingPic";
import PlayedTeestimonials from "../components/home/PlayedTeestimonials";
import BelowCover from "../components/BelowCover";
function About() {
  return (
    <>
    
    <MainTrainingPics />
    <BelowCover/>
      <PlayedTeestimonials/>


      <h2 className="my-m mb-0 text-center main-heading">
        YOUSAF IJAZ MUNAWAR
      </h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>
      <YousafIntro />

      <h2 className="my-m mb-0 text-center main-heading">MY LIFE STORY</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <MyLifeStory />

      <h2 className="my-m mb-0 text-center main-heading">CORPORATE CLIENTS</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <CclientsLogos />

      <h2 className="mt-5 mb-0 text-center main-heading">EXPERIANCE</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <Experiance />

      <div className="my-m"></div>

      <div className="my-p"></div>
      <div className="my-p"></div>

      <Testimonials />
      <div className="my-p"></div>

      <TextTestimonials />
    </>
  );
}

export default About;
