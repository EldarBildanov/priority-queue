class Node {
	constructor(data, priority) {
		this.data = data
		this.priority = priority
		this.parent = null
		this.left = null
		this.right = null
		
	}

	appendChild(node) {
		if (!node) return this;

		if (!this.left) {
		  node.parent = this;
		  this.left = node;
		} else if (!this.right) {
		  node.parent = this;
		  this.right = node;
		}
	}

	removeChild(node) {
		if (!node) return this
		if (this.left != node) 
			if (this.right != node) 
			throw new Error("Not a child")
		if (this.left) this.left = null
		if (this.right) this.right = null
		node.parent = null	
	}

	remove() {
		if (!this.parent) return this
		this.parent.removeChild(this)
	}

	swapWithParent() {
		if (!this.parent) return this
		let parent = this.parent
		let leftChild = this.left
		let rightChild = this.right
		let grandParent = parent.parent

	}
}

module.exports = Node;
