import React from "react";

export const Close = ({ size }: { size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      className="stroke-primary"
      d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
