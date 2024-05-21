import React, { useState } from "react";
import Navbar from "../components/Navbar";
import AboutPic from "../assets/about.png";
import Saturn from "../assets/saturn1.png";
import Star from "../assets/flower.png";
import JourneyFrame from "../components/JourneyFrame";
import FAQ from "../components/FAQ";
import FAQImg from "../assets/faq.png";
import Avatar from '../assets/avatar.png'

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" reddit-sans">
      <Navbar />
      <div className=" pt-10 mx-6 md:mx-14 lg:mx-32">
        <div className=" flex justify-center">
          <p className="font-semibold text-3xl underline-text">ABOUT</p>
        </div>
        <div className=" pt-12 md:gap-12 lg:gap-20 items-center md:flex ">
          <div className=" flex justify-center w-auto md:w-[100%] lg:w-[50%] ">
            <img className=" h-52 md:h-72 lg:h-96" src={AboutPic}></img>
          </div>
          <div className=" md:w-[100%]">
            <div className=" flex">
              <p className=" flex justify-center orange-text text-2xl md:text-3xl lg:text-6xl font-semibold">
                Your Star Determines <br className=" hidden lg:flex" /> Your
                Life's Journey
              </p>
              <img
                className=" lg:h-44 hidden lg:flex absolute right-0"
                src={Saturn}
              ></img>
            </div>
            <p className=" pt-6 mr-0 lg:mr-24">
              I am from Brahmin family & imparting astrological consultations to
              people for the past fifteen years or so and in this period i have
              studied and gone through thousands of Horoscopes. I inherit my
              spiritual power & knowledge of Astrology gained from my guru and
              pray of my Kuldevi.
            </p>
          </div>
        </div>
        <div className=" flex justify-center gap-4 md:gap-10 lg:gap-20 pt-6 animate-pulse">
          <div className="md:flex gap-10 lg:gap-20">
            <a className=" flex items-center hover:cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 lg:w-8 h-6 lg:h-8 orange-text"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p className=" text-sm lg:text-xl font-medium">
                +91 9876543210
              </p>
            </a>
            <a className=" flex items-center hover:cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 md:w-8 h-6 md:h-8 orange-text"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <p className=" text-sm lg:text-xl font-medium">
                astronomy@gmail.com
              </p>
            </a>
          </div>
          <div className=" md:flex gap-10 lg:gap-20">
            <a className=" flex items-center hover:cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 md:w-8 h-6 md:h-8 orange-text"
              >
                <path d="M15.75 8.25a.75.75 0 0 1 .75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 1 1-.992-1.124A2.243 2.243 0 0 0 15 9a.75.75 0 0 1 .75-.75Z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM4.575 15.6a8.25 8.25 0 0 0 9.348 4.425 1.966 1.966 0 0 0-1.84-1.275.983.983 0 0 1-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 0 1 2.328-.377L16.5 15h.628a2.25 2.25 0 0 1 1.983 1.186 8.25 8.25 0 0 0-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.575 15.6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className=" text-sm lg:text-xl font-medium">
                astronomica.in
              </p>
            </a>
            <a className=" flex items-center hover:cursor-pointer hover:underline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 md:w-8 h-6 md:h-8 orange-text"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className=" text-sm lg:text-xl font-medium">
                112, Anna Nagar, Chennai
              </p>
            </a>
          </div>
        </div>

        <div className=" pt-10 md:pt-16 md:flex justify-between">
          <div className=" w-full md:w-[40%]">
            <p className=" orange-text-bold font-semibold text-3xl">
              OUR VISION
            </p>
            <p className=" pt-2 md:pt-6">
              Lorem ipsum dolor sit amet consectetur. Pellentesque nascetur sed
              tellus ut vehicula eu consectetur elit at. Nulla erat nunc nisl
              dui sed cras semper vitae. Tempor odio ullamcorper non sed
              dignissim eu egestas fusce arcu.
            </p>
          </div>
          <div className=" pt-6 md:pt-0 w-full md:w-[40%]">
            <p className=" orange-text-bold font-semibold text-3xl">
              OUR MISSION
            </p>
            <ol className=" pt-2 md:pt-6">
              <li>
                Lorem ipsum dolor sit amet consectetur ellentesque nascetur sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur ellentesque nascetur sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur ellentesque nascetur sed.
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur ellentesque nascetur sed.
              </li>
            </ol>
          </div>
        </div>

        <div className="">
          <img className=" absolute left-0 h-44" src={Star}></img>
          <div className=" pt-10">
            <p className=" flex justify-center orange-text-bold font-semibold text-3xl">
              JOURNEY
            </p>
            <p className=" flex justify-center pt-6">
              When you choose Soul Li Tude, you're choosing a trusted
              <br className=" hidden md:flex" /> partner on your spiritual
              journey. Here's what sets us apart:
            </p>
            <div className=" pt-10">
              <JourneyFrame />
            </div>
          </div>
        </div>

        <div className=" pt-16">
          <p className=" flex justify-center font-semibold text-3xl">
            Frequently asked Questions
          </p>
          <img
            className=" flex absolute right-0 h-16 md:h-44"
            src={FAQImg}
          ></img>

          <div className=" flex justify-center z-50 w-full pt-6">
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
