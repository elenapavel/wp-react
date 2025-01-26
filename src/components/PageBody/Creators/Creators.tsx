import React, { useContext } from "react";
import { Creator } from "./Creator";

import { data } from "../../../data/creators";
import { EllipseWhite } from "../../../icons/shapes";
import clsx from "clsx";
import { ThemeContext } from "../../../App";

export const Creators = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={clsx("p-40 relative text-black", `bg-${theme}`)}>
      <div className="absolute right-0 bottom-0 h-2/5 -mb-px">
        <EllipseWhite />
      </div>
      <h2 className="text-center text-6xl font-extrabold">Creatori</h2>
      <div className="mt-20 w-3/5 mx-auto">
        {data.map((creator) => (
          <Creator {...creator} />
        ))}
      </div>
    </div>
  );
};
