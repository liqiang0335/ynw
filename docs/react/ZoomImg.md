```js
import React, { useState, useEffect } from "react";
import posed from "react-pose";

const Frame = posed.div({
  init: {
    applyAtEnd: { display: "none" },
    opacity: 0,
  },
  zoom: {
    applyAtStart: { display: "block" },
    opacity: 1,
  },
});

const transition = {
  duration: 400,
  ease: [0.08, 0.69, 0.2, 0.99],
};

const Image = posed.img({
  init: {
    position: "static",
    width: "auto",
    height: "auto",
    transition,
    flip: true,
  },
  zoom: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true,
  },
});

export default function ZoomImg(props) {
  const [zoomed, setZoomed] = useState(false);
  const toggle = () => setZoomed(!zoomed);
  const pose = zoomed ? "zoom" : "init";

  useEffect(() => {
    zoomed
      ? window.addEventListener("scroll", toggle)
      : window.removeEventListener("scroll", toggle);
  }, [zoomed]);

  const boxStyle = { width: props.imageWidth, height: props.imageHeight };

  return (
    <div style={boxStyle} onClick={toggle}>
      <Frame pose={pose} style={frameStyle} />
      <Image pose={pose} {...props} style={imgStyle} />
    </div>
  );
}

const frameStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "none",
  background: "white",
  transform: "translateZ(0)",
};

const imgStyle = {
  cursor: "zoom-in",
  display: "block",
  maxWidth: "100%",
  margin: "auto",
};
```
