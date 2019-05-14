import LinkedList from "./LinkedList";

/**
 * 队列(排队)
 */
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (!this.linkedList.head) {
      return null;
    }
    return this.linkedList.head.value;
  }

  //入列
  enqueue() {
    this.linkedList.append(value);
  }

  //出列
  dequeue() {
    const removed = this.linkedList.deleteHead();
    return removed ? removed.value : null;
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

module.exports = Queue;
