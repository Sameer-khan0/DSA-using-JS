// the Stack is the data structure where FIFO(fist in first out) principle format is used where the value that come first they can also 
// delete or out the first 

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item); // Add to the top
    }

    pop() {
        return this.items.pop(); // Remove from the top
    }

    peek() {
        return this.items[this.items.length - 1]; // View the top item
    }

    isEmpty() {
        return this.items.length === 0; // Check if stack is empty
    }
}

// Example
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
console.log(stack.peek()); // 10
