'use client'
import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <>
      <div className="py-20" id="testimonials">
        <h1 className="mb-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          What my Clients {""}
          <span className="text-purple"> have to say!</span>
        </h1>
        {/* <div className="flex flex-col items-center justify-center max-lg:mt-10 "></div> */}
        

        <div className="flex flex-col items-center mx-lg:mt-10">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg mt-10">
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={img} alt={name} className="md:w-10 w-5" />
              <img src={nameImg} alt={name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Clients;
//added 12