const LinkedList = require("./LinkedList");

// The bigger size the less collisions
const defaultHashTableSize = 32;

/**
 * 哈希表
 * 根据哈希值进行分组
 */
class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  //计算哈希值
  hash(key) {
    const hash = Array.from(key).reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    return hash % this.buckets.length;
  }

  set(key, value) {
    const hash = this.hash(key);
    this.keys[key] = hash;
    const bucket = this.buckets[hash];
    const node = bucket.find({ callback: item => item.key === key });
    if (!node) {
      bucket.append({ key, value }); //Insert new node.
    } else {
      node.value.value = value; //Update value of existing node
    }
  }

  delete(key) {
    const hash = this.hash(key);
    delete this.keys[hash];
    const bucket = this.buckets[hash];
    const node = bucket.find({ callback: item => item.key === key });
    if (node) {
      return bucket.delete(node.value);
    }
    return null;
  }

  get(key) {
    const hash = this.hash(key);
    const bucket = this.buckets[hash];
    const node = bucket.find({ callback: item => item.key === key });
    return node ? node.value.value : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}

module.exports = HashTable;
