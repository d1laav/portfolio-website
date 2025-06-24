import React from "react";

export const SectionTransition = ({ from, to, height = "40px" }) => {
  return (
    <div
      style={{
        height,
        background: `linear-gradient(to bottom, hsl(var(--${from})), hsl(var(--${to})))`,
      }}
    />
  );
};
