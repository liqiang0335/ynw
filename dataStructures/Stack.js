const LinkedList = require("./LinkedList");

/**
 * 栈
 */
class Stack {
  constructor() {
    this.linked = new LinkedList();
  }

  isEmpty() {
    return !this.linked.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linked.head.value;
  }

  push(value) {
    this.linked.prepend(value);
  }

  pop() {
    const removed = this.linked.deleteHead();
    return removed ? removed.value : null;
  }

  toArrary() {
    return this.linked.toArray().map(node => node.value);
  }

  toString(callback) {
    return this.linked.toString(callback);
  }
}

module.exports = Stack;
