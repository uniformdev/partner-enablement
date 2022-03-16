import React from "react";

export const Hero = ({ component }) => {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {component.parameters.message?.value}
    </div>
  );
};
