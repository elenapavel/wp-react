import React from "react";

import { Experience } from "./Experience";

import { data } from "../../../data/experiences";

export const Experiences = () => {
  return (
    <div className="bg-white text-black">
      <div className="pt-40 text-center">
        <h2 className="text-6xl font-extrabold">Experiențe</h2>
      </div>
      <div className="mt-20 px-40">
        {data.map((experience) => (
          <Experience {...experience} totalLevels={data.length} />
        ))}
      </div>
    </div>
  );
};
