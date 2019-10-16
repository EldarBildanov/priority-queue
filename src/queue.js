const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.max = maxSize
		if (!maxSize) this.max = 30
		this.heap = new MaxHeap()
	}

	push(data, priority) {

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
