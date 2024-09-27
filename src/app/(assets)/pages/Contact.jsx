"use client";
import React from "react";
import "../styles/AboutCover.css";
import "../styles/AboutCover.css";
import "../styles/Contact.css";
import "../styles/Home.css";
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from "react-icons/bs";

import { useState } from "react";
import { toast } from "react-toastify";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    dob: "",
    gender: "",
    course: "",
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      console.log("form data", formData);

      if (!name || !email || !contact || !dob || !gender || !course) {
        toast.error("fill the complete form first");
        return false;
      }

      let result = await fetch(
        "https://yousafmunawartrainings-backend-live.vercel.app/register",
        {
          method: "post",
          body: JSON.stringify({ name, email, contact, dob, gender, course }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (result.ok) {
        result = await result.json();

        if (result.message === "User Registerd Successfuly") {
          toast.success("Registerd Successfully");
          setFormData({
            name: "",
            email: "",
            contact: "",
            dob: "",
            course: "",
          });

          document.getElementById("male").checked = false;
          document.getElementById("female").checked = false;
        }
      } else {
        Toast.error("error while submiting try againaa");
      }
    } catch (error) {
      Toast.error("error while submiting try again");
    }
  };

  const { name, email, contact, dob, gender, course } = formData;

  return (
    <div className="d-flex flex-column  justify-content-center align-items-center">
      <div className=" my-m  form-container my-w px-3 px-lg-5 px-md-5">
        <h2 className=" mb-0 text-center main-heading m-0">CONTACT FORM</h2>
        <div className=" form-container px-0 px-sm-0 px-lg-5 px-md-5  my-w">
          <div className="d-flex justify-content-center">
            <div className="divder-1"></div>
          </div>
        </div>
      </div>

      <div className=" custom-container px-3 px-lg-5 px-md-5 d-flex mt-2 justify-content-center align-items-center">
        <div className=" form-container px-0 px-sm-0 px-lg-5 px-md-5  my-w">
          <form>
            <label className="mb-2 form-label contact-label">
              Enter Your Name:
            </label>
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="p-1 form-control "
              name="name"
              value={name}
              onChange={onChange}
            />

            <label className="mb-2 form-label contact-label">
              Enter Your Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your First Name"
              className="p-1 form-control"
              name="email"
              value={email}
              onChange={onChange}
            />

            <label className="mb-2 form-label contact-label">
              Enter Your Contact Number:
            </label>
            <input
              type="number"
              placeholder="Enter Your First Name"
              className="p-1 form-control"
              name="contact"
              value={contact}
              onChange={onChange}
            />

            <label className="mb-2 form-label contact-label">
              Select Your Date of Birth
            </label>
            <input
              type="date"
              className="p-1 form-control"
              name="dob"
              value={dob}
              onChange={onChange}
            />

            <label className=" form-label contact-label d-block mb-1">
              Select Your Gender
            </label>
            <input
              type="radio"
              className="me-1"
              id="male"
              name="gender"
              value="male"
              onChange={onChange}
            />
            <label className="me-1" htmlFor="male">
              Male
            </label>
            <input
              type="radio"
              id="female"
              className="ms-1 me-1"
              name="gender"
              value="female"
              onChange={onChange}
            />
            <label htmlFor="female">Female</label>
            <br />

            <label className=" form-label contact-label">
              Select Your concern
            </label>
            <select
              className="p-1 w-100"
              name="course"
              value={course}
              onChange={onChange}
            >
              <option>select your intrest</option>
              <option value="ERASING PAINFUL PAST MEMORIES WITHIN 30 MINUTES">
                Erasing Painful Past Memories within 30 Minutes
              </option>
              <option value="FREE CONSULTATION CALL">
                Free Consultation Call
              </option>
              <option value="WELLNESS COACHING SESSION">
                Wellness Coaching Session
              </option>
              <option value="SUCCESS COACHING SESSION">
                Success Coaching Session
              </option>
              <option value="RESHAPE YOUR LIFE">Reshape Your Life</option>
              <option value="DOUBLE DOSE PRODUCTIVITY">
                Double Dose Productivity
              </option>
            </select>

            <button onClick={submitForm} className=" contect-btn mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="custom-container px-3 px-lg-5 px-md-5">
        <h2 className="my-m mb-0 text-left main-heading-contact">
          Connect with me on your favorite social media platform!
        </h2>

        <div className=" d-flex justify-content-center gap-3 mb-5 mt-4 align-items-center">
          <div className="smIcon">
            <BsFacebook className="react-sm-icomn" />
          </div>
          <div className="smIcon">
            <BsInstagram className="react-sm-icomn" />
          </div>
          <div className="smIcon">
            <BsLinkedin className="react-sm-icomn" />
          </div>
          <div className="smIcon">
            <BsYoutube className="react-sm-icomn" />
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Contact;
