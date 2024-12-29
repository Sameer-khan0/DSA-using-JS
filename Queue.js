// the Stack is the data structure where LIFO(List in First out) principle format is used where the value that come last then they
// remove or delete the first

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item); // Add to the end
    }

    dequeue() {
        return this.items.shift(); // Remove from the front
    }

    front() {
        return this.items[0]; // View the front item
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

// Example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
