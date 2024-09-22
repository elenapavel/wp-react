import React from "react";

import { Experience } from "./Experience";

import { data } from "../../../data/experiences";

export const Experiences = () => {
  return (
    <>
      <div className="p-40 bg-accent text-center">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-primary to-black inline-block text-transparent bg-clip-text">
          Experiențe
        </h2>
      </div>
      <div className="mt-20 px-40 pb-40">
        {data.map((experience) => (
          <Experience {...experience} totalLevels={data.length} />
        ))}
      </div>
    </>
  );
};
