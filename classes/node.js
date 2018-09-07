class Node {
  constructor(nodeVal, parent) {
    this.val = nodeVal;
    this.parent = parent;
    this.children = {};
  }
  getParent() {
    return this.parent;
  }
  updateParent(parent) {
    this.parent = parent;
  }
  updateVal(nodeVal) {
    this.val = val;
  }
  createChild(childVal) {
    if (this.children[childVal]) {
      return 'ERR: DIRECTORY ALREADY EXISTS';
    }
    this.children[childVal] = new Node(childVal, this);
    return 'SUCC: CREATED';
  }
  getChild(childVal) {
    if (!this.children[childVal]) {
      return 'ERR: DIRECTORY DOES NOT EXIST';
    }
    return this.children[childVal];
  }
  deleteChild(childVal) {
    if (this.children[childVal]) {
      delete this.children[childVal].parent;
      delete this.children[childVal];
    }
    return 'SUCC: DELETED';
  }
  getAllChildren() {
    return Object.keys(this.children);
  }
}
module.exports = Node;