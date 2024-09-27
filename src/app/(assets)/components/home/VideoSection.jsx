import React, { Suspense } from 'react';
import '../../styles/Trainingpics.css'; // Make sure the path to your CSS file is correct
import Testimonials from '../Testimonial-button';
import Loader from '../../pages/Loader';
const VideoReuse = React.lazy(() => import("../VideoReuse"));

function VideoSection() {

  return (
    <>
      <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
        <h2 className="text-center mb-0 main-heading">MY LIFE STORY</h2>
        <div className="divder-2"></div>



        <div className="mt-3 pb-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" col-12 col-md-12 co-sm-12 col-lg-9">
                  <Suspense fallback={<Loader/>}>
              <VideoReuse link={"https://www.youtube.com/embed/O6EmGo1K0rY"}/>
              </Suspense>
            </div>

          </div>
        </div>


<div className="pt-5">
        <h2 className="text-center mb-0 main-heading">FREE TRAINING PROGRAM</h2>
        <div className="divder-2"></div>



        <div className="mt-3 pb-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" col-12 col-md-12 co-sm-12 col-lg-9">
              <Suspense fallback={<Loader/>}>
              <VideoReuse link={"https://www.youtube.com/embed/kvsiDmBGJkk"}/>
              </Suspense>
            </div>

          </div>
        </div>
        </div>



<Testimonials/>
      </div>
    </>
  );
}

export default VideoSection;
