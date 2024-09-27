"use client"
import React from "react";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import Image from "next/image";
 
import { useRouter } from "next/navigation";
import Link from "next/link";

const footerData = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
  {
    title: "TESTIMONIALS",
    path: "/testimonials",
  },
];

const programsData = [
  {
    title: "WELLNESS COACHING SESSION",
    path: "/wellnesscoaching",
  },
  {
    title: "SUCCESS COACHING SESSION",
    path: "/successcoaching",
  },
  {
    title: "ERASING PAINFUL PAST MEMORIES",
    path: "/erasingpainfulpastmemories",
  },
  {
    title: "RESHAPE YOUR LIFE",
    path: "/reshapeyourlife",
  },
  {
    title: "DOUBLE DOSE PRODUCTIVITY",
    path: "/doubledoseproductivity",
  },
];

function Footer() {
  let navigate = useRouter();

  const navigatorHome = () => {
    navigate.push("/");
  };

  return (
    <>
      <div className="custom-container pb-3 pt-5 px-sm-3 px-3 px-lg-5 px-md-5 bg-blak">
        <div className="row w-100">
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex flex-column justify-content-start">
              <Image
              style={{width:'270px', height:'auto', cursor: 'pointer', filter: 'invert()', marginBottom:  '30px'}}
                onClick={navigatorHome}
                src={JSON.parse(JSON.stringify(require("../assets/images/primary-images/final logo ymt upload black.webp")))}
                alt="myimage"
              />
              {footerData.map((item, index) => (
                <Link key={index} href={item.path} className="mt-2 footer-links">
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex flex-column justify-content-start ">
              <div className="footer-links-heading">ALL PROGRAMS</div>
              {programsData.map((item, index) => (
                <Link key={index} className="mt-2 footer-links" href={item.path}>
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="d-flex flex-column justify-content-start gap-2">
              <div className="footer-links-heading">CONTACT DETAILS</div>
              <div className=" footer-links">0337 0411579</div>
              <div className="d-flex justify-content-start gap-3 mt-1 align-items-center">
                <Link
                  href="https://www.instagram.com/yousafmunawartrainings/"
                  target="_blank"
                  className="smIcon-footer"
           aria-label="social icons"

                >
                  <BsInstagram className="react-sm-icomn" />
                </Link>
                <Link
                  href="https://www.youtube.com/@yousafijazmunawar"
                  target="_blank"
                  className="smIcon-footer"
           aria-label="social icons"

                >
                  <BsYoutube className="react-sm-icomn" />
                </Link>
                <Link
                  href="https://www.facebook.com/yousafmunawartrainings/"
                  target="_blank"
                  className="smIcon-footer"
           aria-label="social icons"

                >
                  <BsFacebook className="react-sm-icomn" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/yousafmunawartrainings/"
                  target="_blank"
                  className="smIcon-footer"
           aria-label="social icons"

                >
                  <BsLinkedin className="react-sm-icomn" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12  bottom-tagline text-center mt-5">
            <p>
              Copyright © 2024 Yousaf Munawar Trainings. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
