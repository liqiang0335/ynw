import React from "react";
import wordicon from "./word.png";
import pdficon from "./adobe-pdf-icon.svg";

export function IconWord(props) {
  return (
    <img src={wordicon} width="25" style={{ cursor: "pointer" }} {...props} />
  );
}

export function IconPdf(props) {
  return (
    <img src={pdficon} width="23" style={{ cursor: "pointer" }} {...props} />
  );
}
