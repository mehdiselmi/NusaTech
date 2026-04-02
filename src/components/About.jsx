import React from "react";
import atomEditor from "../assets/Atom Editor.png";
import phone from "../assets/phone.png";
import mobile from "../assets/mobile.png";
import location from "../assets/location.png";
const About = () => {
  return (
    <div className="h-120 bg-accent px-15">
      <div className=" flex justify-between border-b-2 border-white h-100  items-center  gap-5  ">
        <div className=" w-120">
          <div className="flex items-center gap-2 mb-15">
            <img src={atomEditor} />
            <p className="text-3xl font-semibold">Nusa Tech</p>
          </div>
          <p className="text-xl">
            Nusa Tech is a leading digital marketing agency dedicated to driving
            success for businesses online. With expertise in SEO, PPC, social
            media, content creation, and more, we offer tailored solutions to
            maximize ROI.
          </p>
        </div>
        <div className="flex items-center ">
          <div className=" w-50">
            <p className="text-primary text-xl font-semibold mb-10">
              Our Services
            </p>
            <ul className="space-y-6 ">
              <li>SEO Marketing</li>
              <li>Research Topic Trends</li>
              <li>Email Marketing</li>
              <li>Google PPC</li>
            </ul>
          </div>
          <div className=" w-50">
            <p className="text-primary text-xl font-semibold mb-10">
              Explore More
            </p>
            <ul className="space-y-3 ">
              <li>About Us</li>
              <li>Feature</li>
              <li>Our Works</li>
              <li>Resource</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className=" w-50">
            <p className="text-primary text-xl font-semibold mb-10">
              Contact Us
            </p>
            <ul className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src={location}
                  className="bg-white rounded-full p-2 px-3"
                />{" "}
                <li>Jl. Medan Merdeka No. 35 Jakarta Selatan</li>
              </div>
              <div className="flex items-center gap-3">
                <img src={phone} className="bg-white rounded-full p-2" />{" "}
                <li>(021) 234567</li>
              </div>
              <div className="flex items-center gap-3">
                <img src={mobile} className="bg-white rounded-full p-2 px-3 " />
                <li>+62 812 9188 72</li>
              </div>
            </ul>
          </div>{" "}
        </div>
      </div>{" "}
      <div className="flex items-center justify-between mt-7">
        <p>Nusa tech 2024 © All right reserved</p>
        <p>Terms & Condition</p>
      </div>
    </div>
  );
};

export default About;
