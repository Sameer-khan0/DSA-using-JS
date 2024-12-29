// the linked list is the data structure where we have the node and each node has the value and poniter value is the data and the poniter
// is the pointer that store or point the value of next node

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

let list = new LinkedList();
list.append(10);
list.append(20);
