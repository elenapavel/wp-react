import React from "react";

import { Button } from "../../Button";
import type { CreatorType } from "../../../data/creators";

export const Creator = ({ id, avatar, name, description }: CreatorType) => {
  return (
    <div className="mb-20 flex last:mb-0">
      <div className="h-full mr-10">
        <div
          className="bg-center bg-no-repeat bg-contain border-black border-[6px] rounded-full size-24"
          style={{
            backgroundImage: `url(${avatar})`,
          }}></div>
      </div>

      <div className="ml-10 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-extrabold text-primary mb-5">{name}</h3>
          <p className="mb-5">{description}</p>
        </div>
        <div className="flex justify-end mt-5">
          <Button
            color="black"
            onClick={() => {
              console.log("detalii", name, id);
            }}>
            Afla mai multe
          </Button>
        </div>
      </div>
    </div>
  );
};
