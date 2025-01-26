import React, { useContext } from "react";
import { WhiteCyan } from "../icons/logos/WhiteCyan";
import { ThemeContext } from "../App";
import clsx from "clsx";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={clsx(
        "sticky top-0 h-20 bg-black border-b-4  w-full flex items-center px-40 py-4 justify-between z-50",
        `border-${theme}`
      )}>
      <div className="h-full">
        <WhiteCyan />
      </div>
      <div className="flex">
        <div
          className={clsx(
            'cursor-pointer ml-14 px-2 after:mt-1 relative inline-block transition-all after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:content-[""] hover:after:w-full',
            `active:text-${theme} after:bg-${theme}`
          )}>
          Trainings
        </div>
        <div
          className={clsx(
            'cursor-pointer ml-14 px-2 after:mt-1 relative inline-block transition-all after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:content-[""] hover:after:w-full',
            `active:text-${theme} after:bg-${theme}`
          )}>
          Echipa
        </div>
        <div
          className={clsx(
            'cursor-pointer ml-14 px-2 after:mt-1 relative inline-block transition-all after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:content-[""] hover:after:w-full',
            `active:text-${theme} after:bg-${theme}`
          )}>
          Tabere
        </div>
      </div>
    </div>
  );
};
