import React from "react";
import "../../styles/Vcoaching.css";
import HomeCard from "./HomeCards";

// Define an array of coaching sessions data
const coachingSessionsData = [
  {
    id: 1,
    title: "Reshape Your Life",
    imageSrc: require("../../assets/images/mockups/reshape-your-life.webp"),
    description:
      "Experience a lifestyle transformation coaching sessions in which I'll help you to reprogram your mind, heal painful memories, and reshape your life for a brighter future through a structured approach.",
    actionLink: "/reshapeyourlife",
    tagline: "Live The Life of Fulfillment",
  },
  {
    id: 2,
    title: "Double Dose Productivity",
    imageSrc: require("../../assets/images/mockups/prooductivity.webp"),
    description:
      "I'll illuminate your mind, enabling you to master your brain's abilities to achieve goals, enhance productivity, and tap into your resourcefulness. You'll discover how to plant your goals in your mind.",
    actionLink: "/doubledoseprodctivity",
    tagline: "Start Chain Reaction Of Achieving Goals",
  },
];

function Vcoaching() {
  return <HomeCard data={coachingSessionsData} />;
}

export default Vcoaching;
