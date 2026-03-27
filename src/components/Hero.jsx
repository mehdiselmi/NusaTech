import React from "react";
import Button from "../components/Button.jsx";
import vector from "../assets/Vector.png";
import vector1 from "../assets/Vector1.png";
import vector2 from "../assets/Vector2.png";
import group from "../assets/Group.png";
import path from "../assets/path.png";
const Hero = () => {
  const support = [
    { id: 1, image: vector, name: "ripple" },
    { id: 2, image: vector1, name: "Dropbox" },
    { id: 3, image: vector2, name: "Walmart" },
    { id: 4, image: group, name: "mister aladin" },
    { id: 5, image: path, name: "Spotify" },
    // { id: 6, image: {}, name: "" },
  ];
  return (
    <div>
      <section>
        <div className="min-h-122 bg-accent  flex text-center justify-center ">
          <div>
            <div className=" text-center md:space-y-7 space-y-8">
              <div className="md:text-7xl text-2xl flex flex-col gap-3 md:mt-8 mt-12 font-bold">
                <p>Drive Growth with Innovative </p>{" "}
                <span className="text-primary ">
                  Digital Marketing Services
                </span>
              </div>
              <p className="md:text-2xl text-sm mx-10   md:mx-auto font-semibold">
                Execute SEO, content marketing, competitor research, PPC, and
                social media marketing <br />
                <span>in one platform.</span>
              </p>
            </div>
            <div className="md:mt-5 mt-10">
              <div>
                <input
                  type="text"
                  placeholder="Enter domain, keyword, or URL"
                  className="placeholder-neutral md:w-160 w-60 md:h-17.25 bg-white rounded-2xl   py-2.5 px-2 md:px-5 outline-none text-black text-sm md:text-xl"
                />
              </div>
            </div>
            <div className="flex gap-5 md:mt-5  mt-8 justify-center">
              <Button
                text="Start Now"
                className="md:px-7.5 md:py-4 border-2 border-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent transition-all duration-500 hover:border-primary focus:border-primary active:border-primary"
              />
              <Button
                text="Learn More"
                className="md:px-7.5 md:py-4 bg-transparent hover:scale-105 active:scale-105 focus:scale-105 transition-all duration-500 border-2 border-primary "
              />
            </div>
          </div>
        </div>
      </section>
      {/* company  */}
      <section>
        <div className="text-center  bg-secondary min-h-70.5 md:pt-20 space-y-10 py-15 md:space-y-15  md:px-45 text-accent">
          <div className="flex md:justify-between md:pt-0 pt-10 md:flex-row flex-col items-center gap-5">
            {support.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-3">
                  <img src={item.image} />
                  <p className="font-bold text-xl">{item.name}</p>
                </div>
              );
            })}
          </div>
          <p className="text-accent text-xl">Trusted by 20,000+ companies </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
