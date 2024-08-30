/*
Description: Given the root node of a tree, return an array where each element is the width of the tree at each level.
Example:

Given:
     0
   / |  \
  1  2   3
 /|      |\
4 5      6 7

Answer: [1, 3, 4]

Approach:
We will have to use BFS to traverse the tree and just add the length;
*/

// Anytime width is asked in question you can use breadth first search.
function levelWidth(root) {
    const arr = [root,'pointer'];
    const counters =[0];
    while(arr.length>1){
        const node = arr.shift();
        if(node === 'pointer'){
            counters.push(0);
            arr.push('pointer'); // We will push pointer back at the end of the array
        }else{
            counters[counters.length-1]++
            arr.push(...node.children);
        }
    }
    return counters;
}
