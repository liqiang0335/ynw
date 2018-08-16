const createElement = function() {
  const div = document.createElement("div");
  const style = {
    background: "#0baa23",
    color: "white",
    padding: "2px 4px",
    display: "inline-block",
    position: "fixed",
    right: "0",
    bottom: "0",
    fontSize: "12px"
  };
  Object.assign(div.style, style);
  return div;
};

const handler = {
  development() {
    document.addEventListener("DOMContentLoaded", e => {
      const div = createElement();
      const time = window.WEBPACK_BUILD_TIME;
      div.textContent = time;
      document.body.appendChild(div);
    });
  },
  production() {
    document.addEventListener("DOMContentLoaded", e => {
      const time = window.WEBPACK_BUILD_TIME;
      console.log(
        `%c BUILD TIME : ${time}`,
        "font-weight:bold;background:green;color:white;padding:2px 4px;"
      );
      //enable pwa
      if (window.WEBPACK_PWA && "serviceWorker" in navigator) {
        setTimeout(() => {
          navigator.serviceWorker
            .register("/sw.js")
            .then(() => console.log(`serviceWorker registration success`))
            .catch(err =>
              console.log(`serviceWorker registration failed : ${err}`)
            );
        }, 1000);
      }
    });
  }
};

handler[process.env.NODE_ENV]();
