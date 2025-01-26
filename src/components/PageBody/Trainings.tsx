import React from "react";

import { Training } from "./Training";

import { data } from "../../data/experiences";

export const Trainings = () => (
  <div className="pt-20 w-full bg-white px-40">
    <div className="flex -mx-4 w-full relative">
      {data.map((experience) => (
        <Training className="mx-4 p-5" {...experience} total={data.length} />
      ))}
    </div>
  </div>
);
