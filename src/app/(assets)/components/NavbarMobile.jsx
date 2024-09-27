"use client";
import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IoOptionsSharp } from "react-icons/io5";
import { useState } from "react";
import "../styles/Navbar.css";
import Whatsapp from "./Whatsapp";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../styles/Main.css";
import Image from "next/image";

function NavbarMobile() {
  const [sessionsActice, setsessionsActice] = useState(false);
  const [trainingsActice, settrainingsActice] = useState(false);
  const [showDropdownF, setShowDropdownF] = useState(false);
  const [showDropdownS, setShowDropdownS] = useState(false);

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleMouseEnterF = () => {
    setShowDropdownF(true);
  };

  const handleMouseEnterS = () => {
    setShowDropdownS(true);
  };

  const location = usePathname();

  let navigate = useRouter();
  const navigatorHome = () => {
    navigate.push("/");
  };

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
      <div className="whatsap-parent-mob displayed-phone">
        <Whatsapp />
      </div>

      <div className="text-center fixed-top justify-content-center  top-tagline p-1 m-0 displayed-phone">
        <p className="m-0 p-1">
          Achieve Victory with Yousaf 🏆🔥 Book Your Free Consultation Call Now!
          📞💼{" "}
        </p>
      </div>

      <div className=" w-100 fixed-mt displayed-phone">
        <div className="w-100 d-flex justify-content-center mt-2 mb-3 align-items-center">
          <div className=" d-flex justify-content-center gap-2  align-items-center">
            <div className="d-flex gap-1">
              <Link
                href="https://www.instagram.com/yousafmunawartrainings/"
                target="_blank"
                className="smIcon-mob"
                aria-label="social icons"
              >
                <BsInstagram className="react-sm-icomn-mob" />
              </Link>
              <Link
                href="https://www.youtube.com/@yousafijazmunawar"
                target="_blank"
                className="smIcon-mob"
                aria-label="social icons"
              >
                <BsYoutube className="react-sm-icomn-mob" />
              </Link>
            </div>

            <div className="text-center">
              <Image
                style={{
                  width: "170px",
                  height: "auto",
                  cursor: "pointer",
                }}
                src={JSON.parse(
                  JSON.stringify(
                    require("../assets/images/primary-images/final logo ymt upload black.webp")
                  )
                )}
                onClick={navigatorHome}
                alt="myimage"
              />
            </div>

            <div className="d-flex gap-1">
              <Link
                href="https://www.facebook.com/yousafmunawartrainings/"
                target="_blank"
                className="smIcon-mob"
                aria-label="social icons"
              >
                <BsFacebook className="react-sm-icomn-mob" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/yousafmunawartrainings/"
                target="_blank"
                className="smIcon-mob"
                aria-label="social icons"
              >
                <BsLinkedin className="react-sm-icomn-mob" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar  navbar-expand-lg navbar-light  my-nav displayed-phone p-2 ">
        <div className="  p-0">
          <button onClick={toggleDrawer} className="nav-btn-phn">
            <IoOptionsSharp className="nav-col-icon" />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla my-drawer-top"
            style={{ backgroundColor: "#dea203", width: "310px" }}
          >
            <ul className="navbar-nav mx-auto  mb-0 mb-lg-0 py-2">
              <li className="nav-item br-b-w m-0  list-unstyled ">
                <Link
                  className={
                    location.pathname === "/"
                      ? "nav-link py-2 ps-2  bg-blak txt-w"
                      : "nav-link py-2 ps-2"
                  }
                  aria-current="page"
                  target="-blank"
                  href="/"
                >
                  HOME
                </Link>
              </li>

              <li className="nav-item br-b-w m-0  list-unstyled ">
                <Link
                  className={
                    location.pathname === "/about"
                      ? "nav-link py-2 ps-2  bg-blak txt-w"
                      : "nav-link py-2 ps-2"
                  }
                  target="-blank"
                  href="/about"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  ABOUT
                </Link>
              </li>

              <li className="nav-item br-b-w m-0  list-unstyled  ">
                <div className=" d-block">
                  <div
                    className={`dropdown  ${showDropdownF ? "show" : ""}`}
                    onClick={handleMouseEnterF}
                  >
                    <div
                      className={`nav-link py-2 ps-2 dropdown-toggle ${
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
                      className={`dropdown-menu ps-0 ${
                        showDropdownF ? "show" : ""
                      } drop-nav  position-relative mb-2 w-100`}
                      aria-labelledby="dropdownMenuLink"
                      style={{
                        marginLeft: "3%",
                      }}
                    >
                      <li className="nav-item br-b-w">
                        <Link
                          className={
                            location.pathname === "/wellnesscoaching"
                              ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak txt-w"
                              : "dropdown-item br-b-w nav-link py-2 ps-2"
                          }
                          target="-blank"
                          href="/wellnesscoaching"
                        >
                          WELLNESS COACHING SESSION
                        </Link>
                      </li>
                      <li className="nav-item br-b-w">
                        <Link
                          className={
                            location.pathname === "/successcoaching"
                              ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak txt-w"
                              : "dropdown-item br-b-w nav-link py-2 ps-2"
                          }
                          target="-blank"
                          href="/successcoaching"
                        >
                          SUCCESS COACHING SESSION
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            location.pathname === "/erasingpainfulpastmemories"
                              ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak txt-w"
                              : "dropdown-item br-b-w nav-link py-2 ps-2"
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

              <li className="nav-item br-b-w m-0  list-unstyled ">
                <div className=" d-block">
                  <div
                    className={`dropdown  ${showDropdownS ? "show" : ""} `}
                    onClick={handleMouseEnterS}
                  >
                    <div
                      className={`nav-link py-2 ps-2 dropdown-toggle ${
                        trainingsActice ? "bg-blak txt-w" : ""
                      }   `}
                      href="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      TRAINING PROGRAMS
                    </div>
                    <ul
                      className={`dropdown-menu ps-0 ${
                        showDropdownS ? "show" : ""
                      } drop-nav position-relative mb-2 w-100`}
                      aria-labelledby="dropdownMenuLink"
                      style={{
                        marginLeft: "3%",
                      }}
                    >
                      <li className="nav-item br-b-w">
                        <Link
                          className={
                            location.pathname === "/reshapeyourlife"
                              ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak txt-w"
                              : "dropdown-item br-b-w nav-link py-2 ps-2"
                          }
                          target="-blank"
                          href="/reshapeyourlife"
                        >
                          RESHAPE YOUR LIFE
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={
                            location.pathname === "/doubledoseprodctivity"
                              ? "dropdown-item br-b-w nav-link py-2 ps-2  bg-blak txt-w"
                              : "dropdown-item br-b-w nav-link py-2 ps-2"
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

              <li className="nav-item br-b-w m-0  list-unstyled ">
                <Link
                  className={
                    location.pathname === "/contact"
                      ? "nav-link py-2 ps-2  bg-blak txt-w"
                      : "nav-link  py-2 ps-2"
                  }
                  target="-blank"
                  href="/contact"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  CONTACT
                </Link>
              </li>
              <li className="nav-item m-0  list-unstyled ">
                <Link
                  className={
                    location.pathname === "/testimonials"
                      ? "nav-link py-2 ps-2  bg-blak txt-w"
                      : "nav-link py-2 ps-2"
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
          </Drawer>
        </div>
      </nav>
    </>
  );
}

export default NavbarMobile;
