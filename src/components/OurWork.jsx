import React from "react";
import rectangle from "../assets/Rectangle.png";
import idea from "../assets/Idea.png";
import idea1 from "../assets/Idea1.png";
import goal from "../assets/Goal.png";
const OurWork = () => {
  const data = [
    {
      id: 1,
      img: goal,
      text: "Solutions Tailored Specifically to Your Business Needs",
    },
    { id: 1, img: idea, text: "Creative Excellence Elevates Every Project" },
    { id: 1, img: idea1, text: "Client Satisfaction is Our Main Focus" },
  ];
  return (
    <div className="mt-15 h-98">
        <p className="font-semibold text-3xl text-neutral text-center">Why Choose Us?</p>
      <div className="grid md:grid-cols-2 grid-cols-1 py-12 items-center  md:px-27.25">
        <div className="md:w-85 mx-auto w-60 ">
          <img src={rectangle} />
        </div>
        <div className=" ">
          {data.map((item) => {
            return (
              <div className=" bg-accent flex items-center gap-5 mt-10 md:mt-4 md:py-6 md:px-5 md:w-150 mx-auto px-2 py-2 w-80 rounded-2xl">
                <img src={item.img} className="rounded-full p-2 w-17 bg-primary" />
                <p className="md:text-xl">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
