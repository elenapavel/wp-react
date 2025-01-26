import React from "react";
import { Button } from "../../Button";
import { DiamondsCyan } from "../../../icons/shapes";

export const Training = ({
  level,
  name,
  description,
  className,
}: {
  level: number;
  name: string;
  total: number;
  description: string;
  className: string;
}) => (
  <div
    className={`min-w-60 w-1/3 text-white border-cyan border-[6px] bg-black relative ${className}`}>
    <div className="absolute left-0 bottom-0 min-w-20 w-1/5 -mb-px">
      <DiamondsCyan />
    </div>
    <div className="flex flex-wrap relative h-full flex-col">
      <h3 className="text-3xl font-extrabold w-full mb-5 self-start">
        Nivel {level} - {name}
      </h3>
      <p className="grow">{description}</p>
      <div className="w-full flex justify-end mt-5 self-end">
        <Button onClick={() => console.log("vezi detalii", level)} color="cyan">
          Unde si cand?
        </Button>
      </div>
    </div>
  </div>
);
