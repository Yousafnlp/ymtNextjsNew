import React from "react";
import "../../styles/Vcoaching.css";
import HomeCard from "./HomeCards";

// Define an array of coaching sessions data
const coachingSessionsData = [
  {
    id: 1,
    title: "Wellness Coaching Session",
    imageSrc: require("../../assets/images/mockups/wellness-coaching.webp"),
    description:
      "Experience a transformative wellness coaching session where I'll address your negative emotions and help you overcome depression. Embrace a brighter future brimming with endless opportunities and possibilities.",
    actionLink: "/wellnesscoaching",
    tagline: "First Step Towards Peace",
  },
  {
    id: 2,
    title: "Success Coaching Session",
    imageSrc: require("../../assets/images/mockups/sussess-coaching.webp"),
    description:
      "Setting goals is the key to achieving the success you desire. Life requires a clear vision of your existence. We'll examine your mindset and assist you in creating an empowering vision with a structured approach.",
    actionLink: "/successcoaching",
    tagline: "First Step Towards Peace",
  },
];

function Vcoaching() {
  return <HomeCard data={coachingSessionsData} />;
}

export default Vcoaching;
