// Description: This file contains the code for the tree data structure.
// The tree data structure is a collection of nodes where each node has a value and a list of children nodes.
// It is used to represent hierarchical relationships between nodes, such as in file systems, computer networks, and databases.
// This code defines a Node class that represents a single node in the tree.
// Each node has a data property to store the value and a children property to store the list of child nodes.
// The class also includes methods to add a new child node and remove a child node based on its value.
// The add() method creates a new Node object with the given data and adds it to the children list.
// The remove() method filters out the child node with the specified data from the children list.
// This code provides a basic implementation of a tree data structure in JavaScript.

/*

Directions:
1. Create a new file called Index.js in the tree directory.
2. Creat Node class with constructor, add and remove methods.
3. Constructor should take data as an argument and set this.data to data and this.children to an empty array.
4. Add method should take data as an argument and push a new Node with the data to this.children.
5. Remove method should take data as an argument and remove the node with the data from this.children.
6. Export Node class.
7. Create Tree class with constructor.
8. Constructor should set this.root to null.
9. Export Tree class.
*/
class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		// using findIndex method to find the index of the node with the specified data
		let index = this.children.findIndex(node => node.data === data);
		if (index !== -1) {
			this.children.splice(index, 1);
		}
		// using filter method to remove the node with the specified data
		//this.children = this.children.filter(node => node.data !== data);
	}

	// For Breadth First we will add elements at end of the array.
	traverseBF(fn){
		const arr = [this.root];
		while(arr.length){
			const node = arr.shift(); // Shift method will take out first element of array
			arr.push(...node.children);
		  //   for(let child of node.children){
		  //       arr.push(child);
		  //   }
			fn(node);
		}
	}
	  
	  // For Depth First we will add elements at start of the array.
	  traverseDF(fn){
		  const arr = [this.root];
		  while(arr.length){
			  const node = arr.shift();
			  arr.unshift(...node.children);
			  fn(node);
		  }
	  }
}

class Tree {
	constructor() {
		this.root = null;
	}
}

export { Node, Tree };