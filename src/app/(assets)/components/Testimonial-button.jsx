import React from "react";
import "../styles/Trainingpics.css";
import "./../styles/Vcoaching.css";
import { HiArrowCircleRight } from "react-icons/hi";
import Link from "next/link";
function TestimonialsButton() {
  return (
    <>
      <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
        <h2 className="text-center mb-0 main-heading">LIVE TESTIMONIALS</h2>
        <div className="divder-2"></div>

        <div className="custom-container d-flex justify-content-center mt-4 align-items-center">
          <div className="pt-4 pb-4 text-center listen-btn">
            <Link href="/testimonials" target="_blank" className="listen-text">
              Click to Listen to a couple of Transformed Lives <br />
              Listen <HiArrowCircleRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialsButton;
