import React from "react";

//Remember to add export to components/index.js
export const FeaturedEvent = ({ component }) => {
  const { name, description, date } =
    component?.parameters?.event?.value?.fields ?? {};
  return (
    <div>
      <hr />
      <div>name: {name}</div>
      <div>description: {description}</div>
      <div>date: {date}</div>
    </div>
  );
};
