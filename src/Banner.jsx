import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Banner = () => {
  return (
    <div className="py-32 px-4 bg-black text-center">
      <p className="text-white  text-5xl font-bold pb-5">
        Welcome to Our Blog
      </p>
      <p className="text-white  mx-24 text-lg pb-5">
        Welcome to our blog! Here, words dance on the screen, Igniting minds and
        sparking dreams unseen. From technology to art, we've got it all, Join
        the conversation, stand proud and tall. Together, let's explore and
        learn a new, Thank you for being here; our journey's shared with you.{" "}
      </p>
      <Link to="/" className="text-white text-lg font-semibold">Learn More <Icon className=" inline text-lg font-semibold" icon="carbon:arrow-right"  style={{color: 'white'}} /></Link>
    </div>
  );
};

export default Banner;
