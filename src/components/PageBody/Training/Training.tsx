import React, { useState } from "react";
import { TrainingDetails } from "./TrainingDetails";

export const Training = ({
  level,
  total,
  description,
  className,
}: {
  level: number;
  total: number;
  description: string;
  className: string;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className={`w-60 h-32 flex justify-center items-center text-white rounded-lg cursor-pointer ${className}`}>
        <h3 className="text-3xl font-bold">Nivel {level}</h3>
      </div>
      {isOpen ? (
        <TrainingDetails
          total={total}
          level={level}
          description={description}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      ) : null}
    </>
  );
};
