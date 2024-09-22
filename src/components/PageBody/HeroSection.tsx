import React from "react";

import { Training } from "./Training";

import { data } from "../../data/experiences";

export const HeroSection = () => {
  return (
    <div className="flex w-full h-screen bg-secondary-light px-40 pb-40 pt-60">
      <div className="flex flex-col justify-between">
        <div className="w-2/3">
          <h1 className="text-6xl font-bold mb-14 bg-gradient-to-r from-primary to-black inline-block text-transparent bg-clip-text">
            Susținere psiho emoțională
          </h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
            fermentum nulla, vel ultrices arcu. Nunc nisl leo, congue eget sem
            vel, sodales cursus massa. Integer iaculis velit eu turpis egestas
            feugiat ut non elit.
          </p>
        </div>
        <div className="flex">
          {data.map((experience) => (
            <Training
              className="bg-gradient-to-br bg-size-200 bg-pos-0 hover:bg-pos-100 from-secondary via-accent to-secondary transition-all duration-300 mr-10"
              level={experience.level}
              description={experience.description}
              total={data.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
