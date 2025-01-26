import React, { PropsWithChildren } from "react";
import clsx from "clsx";

export const Button = ({
  children,
  onClick,
  type = "underline",
  color = "white",
}: {
  onClick: () => void;
  type?: "underline" | "filled";
  color?: "white" | "black" | "cyan" | "pink" | "purple";
} & PropsWithChildren) => {
  return (
    <div
      className={clsx(
        "inline-block cursor-pointer font-extrabold",
        {
          'after:mt-1 relative inline-block transition-all after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:content-[""] hover:after:w-full':
            type === "underline",
        },
        type === "filled" &&
          `bg-${color} text-white p-2 relative hover:after:animate-borderTestTop after:absolute after:top-[2px] after:left-[2px] after:w-0 after:h-0 after:bg-transparent after:border-[2px] after:content-[""] after:border-transparent hover:before:animate-borderTestBottom before:absolute before:bottom-[2px] before:right-[2px] before:w-0 before:h-0 before:bg-transparent before:border-[2px] before:content-[""] before:border-transparent`,
        type === "underline" &&
          `text-${color} after:bg-${color} active:text-${color}`
      )}
      onClick={onClick}>
      <div className="flex items-center h-full">
        <span className="leading-none">{children}</span>
      </div>
    </div>
  );
};
