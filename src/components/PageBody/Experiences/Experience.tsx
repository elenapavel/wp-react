import React from "react";
import clsx from "clsx";

import type { ExperienceType } from "../../../data/experiences";
import { CircleCyan } from "../../../icons/shapes";
import { Button } from "../../Button";

export const Experience = ({
  level,
  name,
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
        "border-dashed border-cyan"
      )}>
      <div className="flex items-center">
        {level % 2 === 0 && (
          <div className="mr-5">
            <Button
              color="cyan"
              type="filled"
              onClick={() => console.log("inscriere", level)}>
              Inscrie-te
            </Button>
          </div>
        )}
        <h3
          className={clsx(
            "text-4xl font-extrabold text-cyan border-[6px] border-cyan inline-block px-4 py-1 leading-none -mt-1",
            level % 2 === 1 ? "-ml-1" : "-mr-1"
          )}>
          Nivel {level} - {name}
        </h3>
        {level % 2 === 1 && (
          <div className="ml-5">
            <Button
              color="pink"
              type="filled"
              onClick={() => console.log("inscriere", level)}>
              Inscrie-te
            </Button>
          </div>
        )}
      </div>
      <div className="mx-10 mb-24 mt-10 w-3/5">
        {steps.map((step, index) => (
          <div className="flex items-start mb-5">
            <div className="mr-5 shrink-0 w-10">
              <div className="relative flex items-center">
                <CircleCyan />
                <div className="absolute font-extrabold text-black ">
                  {level}.{index + 1}
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 leading-none text-2xl">{step.name}</h3>
              <ul>
                {step.description.map((point, index) => (
                  <li key={index}>
                    <span className="bg-cyan size-2 rounded-full mr-2 inline-block" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
