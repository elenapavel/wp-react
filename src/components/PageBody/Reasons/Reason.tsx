import React from "react";
import { clsx } from "clsx";

import { CirclesFused } from "../../Backgrounds";
import { ReasonType } from "../../../data/reasons";

export const Reason = ({
  id,
  name,
  description,
  index,
}: ReasonType & { index: number }) => {
  return (
    <div className="relative py-10">
      <div
        className={clsx(
          index % 2 === 0 ? "left-0" : "right-0",
          "absolute top-0"
        )}>
        <CirclesFused isReversed={index % 2 === 0} />
      </div>
      <div className="relative">
        <h5 className="font-bold text-primary text-xl mb-5">...{name}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
