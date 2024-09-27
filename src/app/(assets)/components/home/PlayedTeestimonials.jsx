import React, { Suspense } from "react";
import Loader from "../../pages/Loader";
const VideoReuse = React.lazy(() => import("../VideoReuse"));

function PlayedTeestimonials() {
  return (
    <>
      <div className="my-home-bg pb-5 pt-4 custom-container px-3 px-lg-5 px-md-5">
   

        <div className="row d-flex justify-content-center align-items-center">
          <div className=" col-12 col-md-7 co-sm-12 col-lg-7">

            
          <Suspense fallback={<Loader/>}>
              <VideoReuse link={"https://www.youtube.com/embed/5CHz01mzNG4?autoplay=1&controls=0"}/>
              </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayedTeestimonials;
