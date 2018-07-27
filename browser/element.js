/**
 * operate DOM
 */
export const addClass = (el, name) => {
  if (el.classList) {
    el.classList.add(name);
  } else {
    el.className += " " + name;
  }
};

export const removeClass = (el, name) => {
  if (el.classList) {
    el.classList.remove(name);
  } else {
    el.className = el.className.replace(
      new RegExp("(^|\\b)" + name.split(" ").join("|") + "(\\b|$)", "gi"),
      " "
    );
  }
};

export const toggleClass = (el, className) => {
  if (el.classList) {
    el.classList.toggle(className);
  } else {
    var classes = el.className.split(" ");
    var existingIndex = classes.indexOf(className);

    if (existingIndex >= 0) classes.splice(existingIndex, 1);
    else classes.push(className);
    el.className = classes.join(" ");
  }
};

export const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);
