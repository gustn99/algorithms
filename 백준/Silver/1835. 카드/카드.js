const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class Deque {
    constructor() {
        this.init();
    }
    
    init() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    
    pushRight(value) {
        const newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        
        this.length++;
    }
    
    pushLeft(value) {
        const newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        
        this.length++;
    }
    
    popLeft() {
        if(!this.head) return null;
        
        const result = this.head.value;
        
        this.head = this.head.next;
        if(!this.head) {
            this.init();
            return result;
        }
        this.head.prev = null;
        this.length--;
        
        
        return result;
    }
    
    popRight() {
        if(!this.head) return null;
        
        const result = this.tail.value;
        
        this.tail = this.tail.prev;
        if(!this.tail) {
            this.init();
            return result;
        }
        this.tail.next = null;
        this.length--;
        
        
        return result;
    }
    
    print() {
        let arr = [];
        let current = this.head;
        
        for(let i = 0; i < this.length; i++) {
            arr.push(current.value);
            current = current.next;
        }
        
        console.log(arr.join(" "));
    }
}

const deque = new Deque();

for(let i = input; i >= 1; i--) {
    deque.pushLeft(i);
    
    for(let j = 1; j <= i; j++) {
        const value = deque.popRight();
        deque.pushLeft(value);
    }
}

deque.print();