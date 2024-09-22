import React from "react";
import { clsx } from "clsx";

export const CirclesFused = ({
  size = "md",
  isReversed = false,
}: {
  size?: "sm" | "md";
  isReversed?: boolean;
}) => (
  <div
    className={clsx(
      {
        "size-40": size === "sm",
        "size-60": size === "md",
      },
      "relative rounded-full shrink-0"
    )}>
    <div
      className={clsx(
        isReversed ? "right-0" : "left-0",
        "bg-primary/70 rounded-full size-7/12 absolute bottom-0 top-0 my-auto blur-xl"
      )}></div>
    <div
      className={clsx(
        isReversed ? "left-0" : "right-0",
        "bg-accent rounded-full size-7/12 absolute  top-0 blur-xl"
      )}></div>
    <div
      className={clsx(
        isReversed ? "left-0" : "right-0",
        "bg-secondary rounded-full size-7/12 absolute  bottom-0 blur-xl"
      )}></div>
  </div>
);
