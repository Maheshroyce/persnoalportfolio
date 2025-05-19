import React from "react";
import { AiFillGithub } from "react-icons/ai";
export default function About() {
  return (
    <div id="about" className="flex justify-center bg-[#0088ff] relative ">
      <div
        id="aboutBox"
        className="hide mt-10 w-[350px] sm:w-[550px] md:w-[720px] lg:w-[1000px] relative flex flex-col mb-10 ml-4"
      >
        <h1 className="my-5 text-5xl font-mono">
          <span className="text-white">About </span>
          <span className="text-[#fb923c]">Me</span>
        </h1>
        <p
          id="aboutDescription"
          className=" leading-loose text-white lg:text-[1.1rem] md:text-[1rem] lg:w-[800px] md:w-[600px] sm:w-[500px]"
        >
          Hi! Myself KORIVI MAHESWAR REDDY, CSE AIML, from KALASALINGAM UNIVERSITY, TAMIL NADU.
          <br />
          I like to deep dive into technologies and explore different domains.
          Am a Core team member of GREATHIRE ( Frontend Software Development ). Interested
          in Web Development, Machine Learning, App Development,
          Competitive Programming.
          <br />
          <span className="font-bold text-[#fb923c]">Birth Place: </span>
          Anantapuram, India. <br />
          <span className="font-bold text-[#fb923c]">Born: </span>6th Dec 2003{" "}
          <br />
          <span className="font-bold text-[#fb923c]">Hobbies: </span> Playing
          chess, Driving Enthusiast Traveling.
        </p>
        <div
          id="profileLinks"
          className="relative flex justify-evenly my-6 w-[300px] text-2xl text-white"
        >
          <a
            href="https://github.com/Maheshroyce"
            target="blank"
            className="hover:scale-125 transition-all duration-200 ease-out"
          >
            {" "}
            <AiFillGithub />{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
