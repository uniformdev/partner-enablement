import React from "react";

export default function FeaturedEvent({ component }) {
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
}
