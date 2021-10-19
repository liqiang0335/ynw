import React from "react";

export function SpaceX({ value = 10 }) {
  return <div style={{ height: value + "px", width: "100%" }}></div>;
}

export function SpaceY({ value = 10 }) {
  return <div style={{ width: value + "px", height: "100%" }}></div>;
}
