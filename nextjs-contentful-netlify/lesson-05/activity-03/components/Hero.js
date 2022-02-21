import React from "react";

export default function Hero({ component }) {
  return (
    <div style={{ whiteSpace: "pre-wrap" }}>
      {component.parameters.message?.value}
    </div>
  );
}
