const HashTable = require("../HashTable");

class BinaryTreeNode {
  constructor(value = null) {
    this.left = null;
    this.right = null;
    this.parent = null;
    this.value = null;

    this.meta = new HashTable();

    this.equal = function(a, b) {
      return a === b;
    };
  }

  get leftHeight() {
    if (!this.left) {
      return 0;
    }

    return this.left.height + 1;
  }

  get rightHeight() {
    if (!this.right) {
      return 0;
    }
    return this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    if (!this.parent) {
      return undefined;
    }

    if (!this.parent.parent) {
      return undefined;
    }

    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined;
    }

    if (this.equal(this.parent, this.parent.parent.left)) {
      return this.parent.parent.right;
    }

    return this.parent.parent.left;
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  setLeft(node) {
    if (this.left) {
      this.left.parent = null;
    }

    this.left = node;

    if (this.left) {
      this.left.parent = this;
    }

    return this;
  }

  setRight(node) {
    if (this.right) {
      this.right.parent = null;
    }

    this.right = node;
    if (node) {
      this.right.parent = this;
    }

    return this;
  }

  removeChild(node) {
    if (this.left && this.equal(this.left, node)) {
      this.left = null;
      return true;
    }

    if (this.right && this.equal(this.right, node)) {
      this.right = null;
      return true;
    }

    return false;
  }

  replaceChild(before, after) {
    if (!before || !after) {
      return false;
    }
    if (this.left && this.equal(this.left, before)) {
      this.left = after;
      return true;
    }
    if (this.right && this.equal(this.right, before)) {
      this.right = after;
      return true;
    }

    return false;
  }

  static copyNode(source, target) {
    target.setValue(source.value);
    target.setLeft(source.left);
    target.setRight(source.right);
  }

  traverseInOrder() {
    const traverse = [];
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }
    traverse.push(this.value); //add root
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  toString() {
    return this.traverseInOrder().toString();
  }
}
