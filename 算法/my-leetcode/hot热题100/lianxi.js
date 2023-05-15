/**
 * @param {number} capacity
 */
class Node {
  constructor(key = null, val = null, pre = null, next = null) {
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}

var LRUCache = function (capacity) {
  this.limit = capacity;
  this.count = 0;
  this.map = {};
  this.head = new Node();
  this.last = new Node();
  this.head.next = this.last;
  this.last.pre = this.head;

  this.removeNode = (node) => {
    let temp = node.pre;
    let temp2 = node.next;
    temp.next = temp2;
    temp2.pre = temp;
  };

  this.insertNode = (node) => {
    let temp = this.head.next;
    this.head.next = node;
    node.pre = this.head;
    node.next = temp;
    temp.pre = node;
  };
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  let node = this.map[key];
  if (node) {
    this.removeNode(node);
    this.insertNode(node);
    return node.val;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map[key]) {
    this.map[key].val = value;
    this.removeNode(this.map[key]);
    this.insertNode(this.map[key]);
  } else {
    if (this.count === this.limit) {
      let node = this.last.pre;
      this.removeNode(this.last.pre);
      delete this.map[node.key];
      this.count--;
    }

    let node = new Node(key, value);
    this.map[key] = node;
    this.insertNode(node);
    this.count++;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
