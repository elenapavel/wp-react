import React from "react";
import clsx from "clsx";

import { Circles } from "../../index";
import type { ExperienceType } from "../../../data/experiences";

export const Experience = ({
  level,
  steps,
  totalLevels,
}: ExperienceType & { totalLevels: number }) => {
  return (
    <div
      className={clsx(
        {
          "border-l-4": level % 2 === 1,
          "border-r-4 flex flex-col items-end": level % 2 === 0,
          "border-b-4": level !== totalLevels,
          "pb-5": level === totalLevels,
        },
        "border-dashed border-accent"
      )}>
      <h3
        className={clsx(
          {
            "-ml-1": level % 2 === 1,
            "-mr-1": level % 2 === 0,
          },
          "text-4xl font-bold text-primary border-[6px] border-accent inline-block px-4 py-1 leading-none -mt-1"
        )}>
        Nivel {level}
      </h3>
      <div className="mx-10 mb-24 mt-10 w-3/5">
        {steps.map((step) => (
          <div className="flex items-start mb-5">
            <div className="mr-5">
              <Circles color="accent" size="xs">
                <span className="font-bold text-primary">{step.name}</span>
              </Circles>
            </div>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
