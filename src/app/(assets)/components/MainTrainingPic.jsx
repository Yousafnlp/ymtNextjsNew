import React from "react";
import "../styles/Trainingpics.css";
import Counter from "./home/Counter";
import Image from "next/image";
 

function MainTrainingPics() {
  return (
    <>
      <div className="custom-container my-home-bg  px-3 px-lg-5 px-md-5">
        <div className="pt-2 pb-lg-4 pb-md-4 pb-sm-2 pb-3 d-flex  justify-content-center  align-items-center ">
          <div className="row justify-content-center mt-3 w-100 align-items-center  ">
            <div className="col-12 "
            style={{
              width:'100%',
              maxWidth:'700px'
            }}>
              <Image
              style={{width: '100%', height: 'auto'}}
                src={JSON.parse(JSON.stringify(require("../assets/images/workshopPics/SAA2.webp")))}
                alt="myimage"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MainTrainingPics;
