const input = require("fs").readFileSync('/dev/stdin').toString().trim();

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    push(value) {
        const newNode = new Node(value);
        
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    
    pop() {
        if(!this.head) return null;
        
        const result = this.head.value;
        
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        
        return result;
    }
    
    size() {
        return this.length;
    }
}

const n = Number(input);
const queue = new Queue();

for(let i = 1; i <= n; i++) {
    queue.push(i);
}

while(queue.size() > 1) {    
    queue.pop();
    const value = queue.pop();
    queue.push(value);
}

console.log(queue.pop());