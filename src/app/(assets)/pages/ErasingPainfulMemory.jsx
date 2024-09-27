import React, { Suspense } from "react";
import "../styles/Home.css";
import Testimonials from "../components/Testimonial-button";
import "./../styles/Sessions.css";
import "./../styles/Gtraining.css";
import "./../styles/BelowCover.css";
import "./../styles/AboutCover.css";
import "./../styles/ImgAnimation.css";
import AllServicesSwiper from "../components/AllServicesSwiper";
import TextTestimonials from "../components/TextTestimonials";
import Counter2 from "../components/Counter2";
import Loader from "./Loader";

import Link from "next/link";
import Image from "next/image";
import Faq from "../components/Faq";
const VideoReuse = React.lazy(() => import("../components/VideoReuse"));
const EppmImage = React.lazy(() => import("../components/EppmImage"));

function ErasingPainfulMemory() {
  return (
    <>
      <div className=" mycover-eppm">
        <div className="w-100  p-2">
          <div className="d-flex justify-content-center gap-5 align-items-center">
            <div className=" col-12 col-md-7 d-flex justify-content-center  align-items-center col-sm-12 col-lg-12">
              <Suspense fallback={<Loader />}>
                <EppmImage />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="belowcover-parent-eppm    pb-2 custom-container px-3 px-lg-5 px-md-5 ">
        <div className="text-center">
          <span className="belowcover-title2-eppm">
            Helping Individuals to Progress from Personal to Professional Lives
          </span>
        </div>
      </div>

      <div className="py-4 custom-container px-3 px-lg-5 px-md-5 bg-red">
        <div className="row d-flex justify-content-center align-items-center">
          <div className=" col-12 col-md-10 co-sm-12 col-lg-8">
            <Suspense fallback={<Loader />}>
              <VideoReuse
                link={
                  "https://www.youtube.com/embed/aRxJ3M4C7aI?autoplay=1&controls=0"
                }
              />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="custom-container px-3 px-lg-5 px-md-5">
        <h2 className="mt-5 mb-0 text-center sessions-m-heading ">
          ERASING PAINFUL PAST MEMORIES
        </h2>
        <div className="sessions-m-divider"></div>
        <div className="d-flex justify-content-center align-items-center">
          <Image
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              marginTop: "1rem",
            }}
            src={JSON.parse(
              JSON.stringify(
                require("../assets/images/mockups/erasing-painful-memories.webp")
              )
            )}
            alt="myimage"
          />
        </div>
      </div>

      <div className="custom-container px-3 px-lg-5 px-md-5">
        <div className=" mt-3">
          <div className=" text-center group-coaching-session">
            <p>
              I offer a 30-minute coaching session where I will help you
              alleviate the pain from your painful past memories, without
              requiring you to disclose the details of your memories. I have
              helped dozens of my clients heal and get rid of their past painful
              memories using my secret healing methods.
            </p>
          </div>
        </div>
      </div>

      <h2 className="mt-4 mb-0 text-center  px-3 px-lg-5 px-md-5  session-tagline pt-2">
        It's Time for Your Peace
      </h2>
      <div className=" custom-container px-3 px-lg-5 px-md-5 bg-red-theme">
        <div className="d-flex justify-content-center ">
          <div className="divder-3"></div>
        </div>
      </div>
      <div className="pt-3 bg-red-theme"></div>

      <div className="custom-container px-3 px-lg-5 px-md-5 pt-5  ">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-3">
            <Image
              style={{
                width: "100%",
                height: "auto",
              }}
              src={JSON.parse(
                JSON.stringify(
                  require("../assets/images/covers/eppm-new-cover.webp")
                )
              )}
              alt="myimage"
            />
          </div>

          <div className="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-0">Key Features</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              <li className="mb-1">
                <strong>Universal Comfort:</strong> It's a 30-minute virtual
                Zoom session, suitable for everyone.
              </li>
              <li className="mb-1">
                <strong>Proven Track Record:</strong> You can listen to what
                people have said about their experiences.
              </li>
              <li className="mb-1">
                <strong>Self-Acceptance:</strong> Overcoming painful memories
                enabls you to start accepting yourself.
              </li>
              <li className="mb-1">
                <strong>Beat Depression:</strong> Erasing painful past memories
                is the initial step toward overcoming depression.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 row justify-content-center flex-column-reverse  flex-sm-column-reverse flex-lg-row  flex-md-column-reverse  align-items-center">
          <div className="p-3 text-center experiance  col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="mb-0">Key Benefits</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              <li className="mb-1">
                <strong>Enhanced Emotional Well-being:</strong> Helps achieve
                greater emotional well-being, leading to a happier and more
                fulfilling life.
              </li>
              <li className="mb-1">
                <strong>Improved Focus:</strong> Stress is reduced, and you
                become more focused on the present.
              </li>
              <li className="mb-1">
                <strong>Positive Self-Image:</strong> helps individuals gain
                greater confidence in themselves and develop a strong, positive
                self-image.
              </li>
              <li className="mb-1">
                <strong>Pathway Towards Lasting Happiness:</strong> You will
                discover how easy it is to program your mind, achieving inner
                wellness or whatever you desire.
              </li>
            </ul>
          </div>

          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-3 ">
            <div className="image-class">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={JSON.parse(
                  JSON.stringify(
                    require("../assets/images/covers/wellness-2.webp")
                  )
                )}
                alt="cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-4 row justify-content-center align-items-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-6 p-4">
            <div className="image-class">
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                }}
                src={JSON.parse(
                  JSON.stringify(
                    require("../assets/images/covers/wellness-3.webp")
                  )
                )}
                alt="cover"
              />
            </div>
          </div>

          <div className="p-3 text-center experiance col-12 col-sm-12 col-md-12 col-lg-6">
            <h3 className="m-0">Target Audience</h3>
            <div className=" mb-3 my-sm-underline"></div>

            <ul>
              <li className="mb-1">
                <strong>Individuals Seeking Personal Growth:</strong> Those who
                are enthusiastic about personal growth and healing on a deeper
                level.
              </li>
              <li className="mb-1">
                <strong>Individuals Struggling with Unhappy Patterns:</strong>{" "}
                Designed for those experiencing depression, anxiety, or other
                unhelpful patterns in life.
              </li>
              <li className="mb-1">
                <strong>Inner Wellness Seekers:</strong> Those who are on a
                journey to find inner peace, harmony, and wellness.
              </li>
              <li className="mb-1">
                <strong>Those in Unresourceful States:</strong> Those who
                frequently find themselves in a challenging or unfavorable
                situation.
              </li>
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
      <Faq />

      <Counter2 />

      <div className="my-home-bg pt-5 custom-container px-3 px-lg-5 px-md-5">
        <div className="mt-3  ">
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

export default ErasingPainfulMemory;
