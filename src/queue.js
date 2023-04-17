const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.listNode = new ListNode();
    }

    enqueue(value) {
        let currentElement = this.listNode;
        if (!currentElement.value) {
            currentElement.value = value;
        } else {
            while (currentElement.next) {
                currentElement = currentElement.next;
            }
            currentElement.next = {}
            currentElement.next.value = value;
            currentElement.next.next = null;
        }
    }

    dequeue() {
        let topElement = this.listNode.value;
        this.listNode = this.listNode.next;
        return topElement;
    }

    getUnderlyingList() {
        return this.listNode;
    }
}

module.exports = {
    Queue
};