import React, { Suspense } from "react";
import "../styles/Home.css";
import Vcoaching from "../components/home/Vcoaching";
import Ctrainings from "../components/home/Ctrainings";
import EppmHome from "../components/home/EppmHome";
import CclientsLogos from "../components/CclientsLogos";
import VideoSection from "../components/home/VideoSection";
import TextTestimonials from "../components/TextTestimonials";
import PlayedTeestimonials from "../components/home/PlayedTeestimonials";
import Counter2 from "../components/Counter2";
import BelowCover from "../components/BelowCover";
import Loader from "./Loader";
const MainTrainingPics = React.lazy(() => import("../components/MainTrainingPic"));

function Home() {
  return (
    <>

      
<Suspense fallback={<Loader/>}>
      <MainTrainingPics />
              </Suspense>
          
      <BelowCover/>
      <PlayedTeestimonials />



      <h2 className="my-m mb-0 text-center main-heading ">STEP INTO PEACE</h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <EppmHome />

      <h2 className="my-m mb-0 text-center main-heading ">
        VICTORY-SESSION
      </h2>

      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <Vcoaching />

      <h2 className="my-m mb-0 text-center main-heading">5-SESSION SERIES</h2>

      <div className=" custom-container px-3 px-lg-5 px-md-5">
        <div className="d-flex justify-content-center">
          <div className="divder-1"></div>
        </div>
      </div>

      <Ctrainings />

      <h2 className="my-m mb-0 text-center main-heading-2 pt-2">
        CORPORATE CLIENTS
      </h2>

      <div className=" custom-container px-3 px-lg-5 px-md-5 my-home-bg">
        <div className="d-flex justify-content-center ">
          <div className="divder-2"></div>
        </div>
      </div>
      <div className=" my-p"></div>

      <CclientsLogos />

      <div className="pt-4 my-p mt-3"></div>

      <div className="my-p"></div>
      <Counter2/>
      <VideoSection />
      <div className="my-p"></div>

      <TextTestimonials />
    </>
  );
}

export default Home;
