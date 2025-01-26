import React from "react";
import { clsx } from "clsx";

export const Reason = ({
  description,
  index,
}: {
  description: string;
  index: number;
}) => {
  return (
    <div className="relative pb-5">
      <div
        className={clsx(
          index % 2 === 0 ? "left-0" : "right-0",
          "absolute top-0"
        )}></div>
      <div className="relative">
        <p>{description}</p>
      </div>
    </div>
  );
};
