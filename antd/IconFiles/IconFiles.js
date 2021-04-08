import React from "react";
import wordicon from "./word.png";
import pdficon from "./adobe-pdf-icon.svg";

export function IconWrod({ onClick }) {
  return (
    <img
      src={wordicon}
      width="25"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
}

export function IconPdf({ onClick }) {
  return (
    <img
      src={pdficon}
      width="23"
      style={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
}
