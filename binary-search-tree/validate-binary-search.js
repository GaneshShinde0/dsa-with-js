// Validating a binary search tree is important to ensure that the tree follows the rules of a binary search tree,
// where the left child of a node is always smaller than the node, and the right child is always greater.

// Here are some examples of binary trees with a depth of 4:

// Example 1:
//       5
//     /   \
//    3     7
//   / \   / \
//  2   4 6   8

// Example 2:
//       10
//     /    \
//    5      15
//   / \    /  \
//  2   7  12   20

// Example 3: Following is invalid  
//        50
//      /    \
//    30      70
//   /  \    /  \
//  20   71  60   80

// Method 1: Inorder Traversal
// In this method, we perform an inorder traversal of the binary tree and check if the resulting array is sorted in ascending order.
// If it is, then the tree is a valid binary search tree.

// Method 2: Recursive Approach
// In this method, we recursively check if each node satisfies the binary search tree property.
// For each node, we check if its value is greater than the maximum value in its left subtree and less than the minimum value in its right subtree.
// We also recursively check if its left and right subtrees are valid binary search trees.

// Method 3: Iterative Approach using Stack
// In this method, we use an iterative approach with a stack to perform an inorder traversal of the binary tree.
// While traversing, we keep track of the previous node and compare it with the current node to check if the tree is a valid binary search tree.

// Method 4: Morris Traversal
// Morris traversal is a space-efficient method to perform an inorder traversal of a binary tree without using a stack.
// It modifies the tree structure temporarily to establish the inorder traversal order.
// During the traversal, we can check if the tree is a valid binary search tree by comparing the values of the current node and its predecessor.

// Method 5: Using Range Constraints
// In this method, we maintain a range of valid values for each node in the binary tree.
// For each node, we check if its value is within the valid range.
// The valid range for the left child of a node is (minimum value, node value), and the valid range for the right child is (node value, maximum value).
// We recursively update the valid range for each child node.

// Choose one of the above methods and implement it in the validateBinarySearchTree() method.


// We are passing null as we do not want to apply min, max for first childs.
function validate(node, min =null, max=null){
	
	// We are moving to left and we are concerned about max;
	// As data on left node is greater than max (it breaks BST rules) hence we are returning false
	if (max!=null && node.data>max){
		return false;
	}

	// We are moving to right and we are concerned about min;
	// As data on the right is less than min (it breaks BST rules) hence we are returning false
	if (min!=null && node.data<min){
		return false;
	}

	// We are checking if node is there on left
	// For left child nodes we are passing current nodes data as a max,
	// And if that subtree does not satisfy the rules we are returing false;
	if(node.left && !validate(node.left, min, node.data)){
		return false;
	}

	// We are checking if node is there on right
	// For right child nodes we are passing current nodes data as min
	// As all nodes on right subtree should be greater than min
	// If any of the nodes data is less than min we will return false. 
	if(node.right && !validate(node.right, node.data, max)){
		return false;
	}

	return true;
}
