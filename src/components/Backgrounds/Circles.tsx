import React, { PropsWithChildren } from "react";
import { clsx } from "clsx";

export const Circles = ({
  color = "primary",
  size = "sm",
  children,
}: {
  color?: "primary" | "secondary" | "secondary-light" | "accent";
  size?: "xs" | "sm" | "md" | "lg";
} & PropsWithChildren) => (
  <div
    className={clsx(
      {
        "size-16": size === "xs",
        "size-24": size === "sm",
        "size-40": size === "md",
        "size-52": size === "lg",
      },
      "relative rounded-full shrink-0"
    )}>
    <div
      className={clsx(
        {
          "bg-primary/50": color === "primary",
          "bg-secondary/50": color === "secondary",
          "bg-secondary-light/50": color === "secondary-light",
          "bg-accent/50": color === "accent",
        },
        "rounded-full size-10/12 absolute left-0 bottom-0 top-0 my-auto"
      )}></div>
    <div
      className={clsx(
        {
          "bg-primary/50": color === "primary",
          "bg-secondary/50": color === "secondary",
          "bg-secondary-light/50": color === "secondary-light",
          "bg-accent/50": color === "accent",
        },
        "rounded-full size-10/12 absolute right-0 top-0"
      )}></div>
    <div
      className={clsx(
        {
          "bg-primary/50": color === "primary",
          "bg-secondary/50": color === "secondary",
          "bg-secondary-light/50": color === "secondary-light",
          "bg-accent/50": color === "accent",
        },
        "rounded-full size-10/12 absolute right-0 bottom-0"
      )}></div>
    <div className="bg-secondary-light rounded-full size-8/12 absolute left-0 bottom-0 top-0 right-0 m-auto flex justify-center items-center overflow-hidden">
      {children}
    </div>
  </div>
);
