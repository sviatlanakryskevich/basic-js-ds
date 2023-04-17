const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
    constructor() {
        this.node = null;
    }

    root() {
        return this.node;
    }

    add(data) {
        if (this.node === null) {
            this.node = new Node();
            this.node.data = data;
        } else {
            this.insertNode(this.node, data);
        }
    }

    insertNode(node, data) {
        if (node.data > data) {
            if (node.left === null) {
                node.left = new Node();
                node.left.data = data;
            } else {
                this.insertNode(node.left, data);
            }
        } else if (node.data < data) {
            if (node.right === null) {
                node.right = new Node();
                node.right.data = data;
            } else {
                this.insertNode(node.right, data);
            }
        }
    }


    has(data) {
        return this.find(data) ? true : false;
    }

    find(data) {
        let currentNode = this.node;
        while (currentNode) {
            if (currentNode.data === data) {
                return currentNode;
            }
            if (currentNode.data > data) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return null;
    }

    remove(data) {
        this.removeNode(this.node, data)
    }



    removeNode(node, data) {
        if (node === null) {
            return null;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }

    minNode(node) {
        let min = node;
        while (min.left) {
            min = min.left;
        }
        return min;
    }

    min() {
        return this.minNode(this.node).data;
    }

    max() {
        let max = this.node;
        while (max.right) {
            max = max.right;
        }
        return max.data;
    }
}


module.exports = {
    BinarySearchTree
};