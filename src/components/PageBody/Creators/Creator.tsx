import React from "react";

import { Circles } from "../../Backgrounds";
import { Button } from "../../Button";
import type { CreatorType } from "../../../data/creators";

export const Creator = ({ id, avatar, name, description }: CreatorType) => {
  return (
    <div className="mb-20 flex">
      <Circles size="lg" color="secondary">
        <div
          className="size-full bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${avatar})`,
          }}></div>
      </Circles>
      <div className="ml-20 flex flex-col justify-between w-full">
        <div>
          <h3 className="text-2xl font-bold text-primary mb-5">{name}</h3>
          <p className="mb-5">{description}</p>
        </div>
        <div className="flex justify-end mt-5">
          <Button
            color="primary"
            type="underline"
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
