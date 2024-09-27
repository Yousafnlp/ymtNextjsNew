"use client";
import { useEffect } from "react";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useState } from "react";
import "../styles/Navbar.css";
import WhatsappLaptop from "./WhatsappLaptop";
import '../styles/ImgAnimation.css'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import '../styles/Main.css'
import "../styles/Trainingpics.css";

function Navbar() {
  const [showDropdownF, setShowDropdownF] = useState(false);
  const [showDropdownS, setShowDropdownS] = useState(false);
  const [sessionsActice, setsessionsActice] = useState(false);
  const [trainingsActice, settrainingsActice] = useState(false);

  const handleMouseEnterF = () => {
    setShowDropdownF(true);
  };

  const handleMouseLeaveF = () => {
    setShowDropdownF(false);
  };

  const handleMouseEnterS = () => {
    setShowDropdownS(true);
  };

  const handleMouseLeaveS = () => {
    setShowDropdownS(false);
  };

  let navigate = useRouter();
  const navigatorHome = () => {
    navigate.push("/");
  };

  const location = usePathname();

  useEffect(() => {
    if (
      location.pathname === "/wellnesscoaching" ||
      location.pathname === "/successcoaching" ||
      location.pathname === "/erasingpainfulpastmemories"
    ) {
      setsessionsActice(true);
      settrainingsActice(false);
    } else if (
      location.pathname === "/doubledoseprodctivity" ||
      location.pathname === "/reshapeyourlife"
    ) {
      setsessionsActice(false);
      settrainingsActice(true);
    } else {
      setsessionsActice(false);
      settrainingsActice(false);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="whatsap-parent  displayed-laptop" >
        <WhatsappLaptop />
      </div>

      <div className="p displayed-laptop">
        <div className="text-center fix top-tagline p-1 m-0">
          <p className="m-0 p-1">
            Achieve Victory with Yousaf 🏆🔥 Book Your Free Consultation Call
            Now! 📞💼{" "}
          </p>
        </div>
      </div>
      <div className="row w-100 fixed-mt-pc displayed-laptop">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className=" d-flex justify-content-center gap-3  align-items-center">
            <Link
              href="https://www.instagram.com/yousafmunawartrainings/"
              target="_blank"
              className="smIcon"
           aria-label="social icons"
              
            >
              <BsInstagram className="react-sm-icomn" />
            </Link>
            <Link
              href="https://www.youtube.com/@yousafijazmunawar"
              target="_blank"
              className="smIcon"
           aria-label="social icons"

            >
              <BsYoutube className="react-sm-icomn" />
            </Link>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <Image
              style={{ width: "300px", height: "auto", cursor: "pointer" }}
              className="my-3"
              onClick={navigatorHome}
              src={JSON.parse(JSON.stringify(require("../assets/images/primary-images/final logo ymt upload black.webp")))}
              alt="myimage"
            />
          </div>
        </div>
        <div className="col-3 d-flex justify-content-center  align-items-center">
          <div className=" d-flex justify-content-center gap-3 align-items-center">
            <Link
              href="https://www.facebook.com/yousafmunawartrainings/"
              target="_blank"
              className="smIcon"
           aria-label="social icons"

            >
              <BsFacebook className="react-sm-icomn" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/yousafmunawartrainings/"
              target="_blank"
              className="smIcon"
           aria-label="social icons"

            >
              <BsLinkedin className="react-sm-icomn" />
            </Link>
          </div>
        </div>
      </div>

      <nav className="navbar  navbar-expand-lg navbar-light justify-content-center my-nav p-2 displayed-laptop">
        <div className="  p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-0 mb-lg-0 ">
              <li className="nav-item px-1 ">
               
               
              </li>

              <li className="nav-item px-1 ">
                <Link
                  className={
                    location.pathname === "/"
                      ? "nav-link py-1  bg-blak txt-w"
                      : "nav-link py-1"
                  }
                  target="-blank"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item px-1 ">
                <Link
                  className={
                    location.pathname === "/about"
                      ? "nav-link py-1 bg-blak txt-w"
                      : "nav-link py-1 "
                  }
                  target="-blank"
                  href="/about"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item px-1 ">
                <div className=" d-inline-block">
                  <div
                    className={`dropdown ${showDropdownF ? "show" : ""}   `}
                    onMouseEnter={handleMouseEnterF}
                    onMouseLeave={handleMouseLeaveF}
                  >
                    <div
                      className={`nav-link py-1 dropdown-toggle ${
                        sessionsActice ? "bg-blak txt-w" : ""
                      }   `}
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      VICTORY COACHINGS
                    </div>
                    <ul
                      className={`dropdown-menu ${
                        showDropdownF ? "show" : ""
                      } drop-nav p-0`}
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="py-1 br-b-w">
                        <Link
                          className={
                            location.pathname === "/wellnesscoaching"
                              ? "nav-link py-1 dropdown-item txt-w bg-blak"
                              : " dropdown-item nav-link py-1"
                          }
                          target="-blank"
                          href="/wellnesscoaching"
                        >
                          WELLNESS COACHING SESSION
                        </Link>
                      </li>
                      <li className="py-1 br-b-w">
                        <Link
                          className={
                            location.pathname === "/successcoaching"
                              ? "nav-link py-1 dropdown-item  bg-blak txt-w"
                              : " dropdown-item nav-link py-1"
                          }
                          target="-blank"
                          href="/successcoaching"
                        >
                          SUCCESS COACHING SESSION
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={
                            location.pathname === "/erasingpainfulpastmemories"
                              ? "nav-link py-1 dropdown-item txt-w bg-blak"
                              : " dropdown-item nav-link py-1"
                          }
                          target="-blank"
                          href="/erasingpainfulpastmemories"
                        >
                          ERASING PAINFUL PAST MEMORIES
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item px-1 ">
                <div className=" d-inline-block">
                  <div
                    className={`dropdown ${showDropdownS ? "show" : ""}`}
                    onMouseEnter={handleMouseEnterS}
                    onMouseLeave={handleMouseLeaveS}
                  >
                    <div
                      className={`nav-link py-1 dropdown-toggle ${
                        trainingsActice ? "bg-blak txt-w" : ""
                      }   `}
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      TRAINING PROGRAMS
                    </div>
                    <ul
                      className={`dropdown-menu ${
                        showDropdownS ? "show" : ""
                      } drop-nav p-0 `}
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="py-1 br-b-w">
                        <Link
                          className={
                            location.pathname === "/reshapeyourlife"
                              ? "nav-link py-1 dropdown-item  bg-blak txt-w"
                              : " dropdown-item nav-link py-1"
                          }
                          target="-blank"
                          href="/reshapeyourlife"
                        >
                          RESHAPE YOUR LIFE
                        </Link>
                      </li>
                      <li className="py-1">
                        <Link
                          className={
                            location.pathname === "/doubledoseprodctivity"
                              ? "nav-link py-1  bg-blak txt-w dropdown-item"
                              : "nav-link py-1 dropdown-item"
                          }
                          target="-blank"
                          href="/doubledoseprodctivity"
                        >
                          DOUBLE DOSE PRODUCTIVITY
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="nav-item px-1 ">
                <Link
                  className={
                    location.pathname === "/contact"
                      ? "nav-link py-1  bg-blak txt-w"
                      : "nav-link py-1"
                  }
                  target="-blank"
                  href="/contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item px-1 ">
                <Link
                  className={
                    location.pathname === "/testimonials"
                      ? "nav-link py-1  bg-blak txt-w"
                      : "nav-link py-1"
                  }
                  target="-blank"
                  href="/testimonials"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  TESTIMONIALS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
