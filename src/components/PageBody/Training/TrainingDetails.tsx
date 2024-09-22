import React, { useRef, useEffect } from "react";

import { Button } from "../../Button";
import { Close } from "../../Icons/Close";

export const TrainingDetails = ({
  onClose,
  level,
  total,
  description,
}: {
  level: number;
  total: number;
  description: string;
  onClose: () => void;
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (
        !!detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="fixed bg-black/30 top-0 left-0 right-0 bottom-0 w-full h-full" />
      <div
        ref={detailsRef}
        className="fixed w-[50rem] h-[32rem] bg-white rounded-lg top-0 left-0 right-0 bottom-0 m-auto flex flex-col">
        <div className="mt-12 mx-12 relative">
          <div className="absolute right-0 top-0" onClick={onClose}>
            <Button
              type="ghost"
              onClick={() => {
                console.log("detalii");
              }}>
              <Close size={12} />
            </Button>
          </div>
          <h2 className="text-4xl font-bold">Nivel {level}</h2>
          <div
            className={`border-b-secondary border-b-8 mt-6 rounded`}
            style={{ width: `calc(100%/${total}*${level})` }}></div>
        </div>
        <div className="pt-6 pb-12 px-12 flex flex-col justify-between h-full">
          <div>
            <p className="mb-4">{description}</p>
          </div>
          <div className="flex justify-end items-center">
            {/* <div>
              <Button
                onClick={() => {
                  console.log("detalii");
                }}>
                Detalii
              </Button>
            </div> */}
            <div>
              <Button
                type="underline"
                onClick={() => {
                  console.log("inchide");
                  onClose();
                }}>
                Vezi detalii
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
