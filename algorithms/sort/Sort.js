const Comparator = require("../util/Comparator");

class Sort {
  constructor(callbacks) {
    this.callbacks = {
      visiting: f => f,
      ...callbacks
    };
    this.comparator = new Comparator(this.callbacks.comparator);
  }

  sort() {
    throw new Error("sort method must be implemented...");
  }
}

module.exports = Sort;
