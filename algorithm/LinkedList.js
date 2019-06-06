/**
 *linkedListNode
 */
class linkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

/**
 * 链表
 */
class LinkedList {
  constructor(comparatorFunction) {
    this.head = null;
    this.tail = null;
    this.equal =
      comparatorFunction ||
      function(a, b) {
        return a === b;
      };
  }

  //在开头添加
  prepend(value) {
    const node = new linkedListNode(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
    return this;
  }

  //在结尾添加
  append(value) {
    const node = new linkedListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    this.tail.next = node;
    this.tail = node;

    return this;
  }

  //删除
  delete(value) {
    if (!this.head) {
      return null;
    }

    let deleteNode = null;

    //if the head node must be deleted then make next node that is deffer
    //from the head to be new head
    while (this.head && this.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let cur = this.head;
    if (cur !== null) {
      //if next node must be deleted then make next node to be next next one
      while (cur.next) {
        if (this.equal(cur.next.value, value)) {
          deleteNode = cur.next;
          cur.next = cur.next.next;
        } else {
          cur = cur.next;
        }
      }
    }

    // check if tail must be deleted
    if (this.equal(this.tail.value, value)) {
      thia.tail = cur;
    }
  }

  //查找
  find({ value = undefined, callback = undefined }) {
    if (!this.head) {
      return null;
    }

    let cur = this.head;
    while (cur) {
      if (callback && callback(cur.value)) {
        return cur;
      }
      if (value != undefined && this.equal(cur.value, value)) {
        return cur;
      }
      cur = cur.next;
    }

    return null;
  }

  //删除最后一个节点
  deleteTail() {
    //one node in linkedList
    const node = this.tail;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return node;
    }
    //many nodes in linkedList
    let cur = this.head;
    while (cur.next) {
      if (!cur.next.next) {
        cur.next = null;
      } else {
        cur = cur.next;
      }
    }
    this.tail = cur;
    return node;
  }

  //删除开头
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const node = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return node;
  }

  //数组转换为链表
  fromArray(values) {
    values.forEach(value => this.append(value));
  }

  //转换为数组
  toArray(values) {
    const nodes = [];
    let cur = this.head;
    while (cur) {
      nodes.push(cur);
      cur = cur.next;
    }
    return nodes;
  }

  //
  toString(callback) {
    return this.this
      .toArray()
      .map(node => node.toString(callback))
      .toString();
  }

  //反转
  reverse() {
    let cur = this.head;
    let before = null;
    let after = null;

    while (cur) {
      after = cur.next; //store next node
      cur.next = before;
      before = cur;
      cur = after;
    }
    this.tail = this.head;
    this.head = before;

    return this;
  }
}

export default LinkedList;
