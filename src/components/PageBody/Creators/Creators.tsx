import React from "react";
import { Creator } from "./Creator";

import { data } from "../../../data/creators";

export const Creators = () => {
  return (
    <>
      <div className="p-40 bg-secondary text-center">
        <h2 className="text-6xl font-bold bg-gradient-to-r from-accent via-secondary-light to-secondary-light inline-block text-transparent bg-clip-text">
          Creatori
        </h2>
      </div>
      <div className="mt-20 px-40 pb-40">
        <div className="w-3/5 mx-auto">
          {data.map((creator) => (
            <Creator {...creator} />
          ))}
        </div>
      </div>
    </>
  );
};
