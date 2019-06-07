var createElement = function() {
  var div = document.createElement("div");
  var style = {
    background: "#0baa23",
    color: "white",
    padding: "2px 4px",
    display: "inline-block",
    position: "fixed",
    right: "0",
    bottom: "0",
    fontSize: "12px"
  };
  for (var key in style) {
    div.style[key] = style[key];
  }
  return div;
};

var handler = {
  development: function() {
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        var div = createElement();
        var time = window.WEBPACK_BUILD_TIME;
        div.textContent = time;
        document.body.appendChild(div);
      },
      false
    );
  },
  production: function() {
    document.addEventListener(
      "DOMContentLoaded",
      function() {
        var time = window.WEBPACK_BUILD_TIME;
        console.log(
          "%c BUILD TIME : " + time,
          "font-weight:bold;background:green;color:white;padding:2px 4px;"
        );
      },
      false
    );
  }
};

handler[process.env.NODE_ENV]();
