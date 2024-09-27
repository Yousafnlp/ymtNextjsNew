import React from "react";
import "../../styles/Gtraining.css";
import "../../styles/Home.css";

const experienceData = {
  coach: [
    "I have helped over 100 people make significant progress in their personal and professional lives.",
    "I successfully eliminated painful past memories for more than 25 people in just 30 minutes.",
    "I have earned more than 30 live testimonials from various clients.",
  ],
  CorporateTraining: [
    "I conducted a session on productivity for the Business Incubation Center of GCU (Government College University).",
    "I conducted sessions on persuasion for Coding Fiesta, an IT service provider.",
    "I delivered a training session on persuasion to MBA students at the Management and Studies Department of GCU (Government College University).",
  ],
  talks: [
    "UET Lahore has invited me as a guest speaker on Persuasion and Managerial Skills at the annual startup idea/pitching competition during the ICOSST International conference.",
    "UET Lahore has invited me as a guest speaker on Persuasion at the Startups Bootcamp under the Prime Minister's Youth Program 2023, which was held at UET in collaboration with HEC.",
  ],
  ExpertiseinCoaching: [
    "Assisting in enhancing the client's effectiveness and their ability to cope.",
    "Facilitating behavioral change.",
    "Helping clients overcome phobias in just one coaching session.",
    "Assisting clients in overcoming negative emotions, such as anger, sadness, guilt, betrayal, or fear, in just one coaching session.",
    "Erasing the painful effects of any distressing past memories in just 30 minutes.",
  ],
  ExpertiseinTraining: [
    "Integrating people's goals into their mindsets.",
    "Training people to boost their productivity.",
    "Training corporations to grow their sales.",
    "Training people to initiate a chain reaction of achieving goals.",
    "Conducting workshops on effective communication and interpersonal skills.",
    "Stress management training for individuals and organizations.",
  ],
};

function Experiance() {
  return (
    <>
      <div className="custom-container px-3 px-lg-5 px-md-5">
        <div className="row justify-content-center align-items-start mt-5">
          <div className="p-2 text-center experiance col-12 ">
            <h3 className="mb-2">As a Coach</h3>
            <ul>
              {experienceData.coach.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="p-2 text-center experiance  col-12">
            <h3 className="mb-2">In Terms of Corporate Training</h3>
            <ul>
              {experienceData.CorporateTraining.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="p-2 text-center experiance  col-12">
            <h3 className="mb-2">Talks</h3>
            <ul>
              {experienceData.talks.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <h2 className="my-m mb-0 text-center main-heading">EXPERTISE</h2>
        <div className="divder-1"></div>

        <div className="row justify-content-start align-items-start mt-5">
          <div className="p-2 text-center experiance col-12 col-md-6 col-lg-6">
            <h3 className="mb-2">Expertise in Coaching</h3>

            <ul>
              {experienceData.ExpertiseinCoaching.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>

          <div className="p-2 text-center experiance col-12 col-md-6 col-lg-6">
            <h3 className="mb-2">Expertise in Training</h3>

            <ul>
              {experienceData.ExpertiseinTraining.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiance;
