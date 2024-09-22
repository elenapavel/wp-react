import React, { PropsWithChildren } from "react";
import clsx from "clsx";

export const Button = ({
  children,
  onClick,
  type = "outline",
  color = "primary",
}: {
  onClick: () => void;
  type?: "underline" | "filled" | "outline" | "ghost";
  color?: "primary" | "secondary" | "secondary-light" | "accent";
} & PropsWithChildren) => {
  return (
    <div
      className={clsx(
        {
          "border-2 rounded-full p-2 text-primary tracking-wide font-bold transition-colors duration-300":
            type === "outline",
          'tracking-wide font-bold after:mt-1 relative after:absolute after:left-0 after:block after:h-[2px] after:w-0 after:transition-all after:content-[""] hover:after:w-full':
            type === "underline",
          "font-bold rounded-full py-1 px-6 tracking-wide transition-colors duration-300":
            type === "filled",
          "tracking-wide font-bold p-2 transition-colors duration-300 rounded-full":
            type === "ghost",
          "border-primary  hover:border-primary/30":
            type === "outline" && color === "primary",
          "border-secondary  hover:border-secondary/30":
            type === "outline" && color === "secondary",
          "border-secondary-light  hover:border-secondary-light/30":
            type === "outline" && color === "secondary-light",
          "border-accent  hover:border-accent/30":
            type === "outline" && color === "accent",
          "text-primary after:bg-primary":
            type === "underline" && color === "primary",
          "text-secondary after:bg-secondary":
            type === "underline" && color === "secondary",
          "text-secondary-light after:bg-secondary-light":
            type === "underline" && color === "secondary-light",
          "text-accent after:bg-accent":
            type === "underline" && color === "accent",
          "bg-primary text-secondary-light hover:bg-primary/80":
            type === "filled" && color === "primary",
          "bg-secondary text-primary hover:bg-secondary/80":
            type === "filled" && color === "secondary",
          "bg-secondary-light text-primary hover:bg-secondary-light/80":
            type === "filled" && color === "secondary-light",
          "bg-accent text-primary hover:bg-accent/80":
            type === "filled" && color === "accent",
          "text-primary hover:bg-secondary/20":
            type === "ghost" && color === "primary",
          "text-secondary hover:bg-primary/20":
            type === "ghost" && color === "secondary",
          "text-secondary-light hover:bg-primary/20":
            type === "ghost" && color === "secondary-light",
          "text-accent hover:bg-primary/20":
            type === "ghost" && color === "accent",
        },
        "inline-block cursor-pointer"
      )}
      onClick={onClick}>
      <div className="flex items-center h-full">
        <span className="leading-none">{children}</span>
      </div>
    </div>
  );
};
