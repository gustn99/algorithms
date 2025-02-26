class MinHeap {
	constructor() {
		this.heap = [];
	}
	
	size() {
		return this.heap.length;
	}
	
	swap(idx1, idx2) {
		[this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
	}
	
	// 삽입
	heapPush(value) {
		this.heap.push(value); // 마지막에 새 요소를 넣음
		this.heapifyUp(); // 마지막에서 위로 올라가며 정렬
	}
	
	heapifyUp() {
		let index = this.heap.length - 1;
		let parentIndex = (index - 1) / 2>> 0;
		
		while(
			this.heap[parentIndex] &&
			this.heap[index] < this.heap[parentIndex]
		) {
			this.swap(index, parentIndex);
			index = parentIndex;
			parentIndex = (index - 1) / 2 >> 0;
		}
	}
	
	// 삭제
	heapPop() {
        if(this.heap.length === 0) {
            return null;
        }
        
		if(this.heap.length === 1) {
			return this.heap.pop();
		}
		
		const value = this.heap[0];
		this.heap[0] = this.heap.pop() // 마지막 요소를 루트에 넣음
		this.heapifyDown(); // 루트에서 아래로 비교하여 정렬
        
		return value;
	}
	
	heapifyDown() {
		let index = 0;
		let leftIndex = index * 2 + 1;
		let rightIndex = index * 2 + 2;
		
		while(
			this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index] ||
			this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index]
		) {
			let smallerIndex = leftIndex;
			if(this.heap[leftIndex] > this.heap[rightIndex]) {
				smallerIndex = rightIndex;
			}
			
			this.swap(index, smallerIndex);
			index = smallerIndex;
			leftIndex = index * 2 + 1;
			rightIndex = index * 2 + 2;
		}
	}
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(input[0]);
const minHeap = new MinHeap();

const output = [];

for(let i = 0; i < n; i++) {
    let x = Number(input[i+1]);
    
    if(x === 0) {
        let value = minHeap.heapPop();
        if (!value) {
            output.push(0);
        } else {
            output.push(value);
        }
    } else {
        minHeap.heapPush(x);
    }
}

console.log(output.join(' '));