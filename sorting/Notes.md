Here are some commonly used sorting algorithms along with their time complexities and difficulty levels:

| Sorting Algorithm | Time Complexity     | Difficulty |
|-------------------|---------------------|------------|
| Bubble Sort       | O(n^2)              | Easy       |
| Selection Sort    | O(n^2)              | Easy       |
| Insertion Sort    | O(n^2)              | Easy       |
| Merge Sort        | O(n log n)          | Medium     |
| Quick Sort        | O(n log n) (avg)    | Medium     |
| Heap Sort         | O(n log n)          | Medium     |
| Radix Sort        | O(nk)               | Medium     |
| Counting Sort     | O(n + k)            | Medium     |
| Bucket Sort       | O(n^2) (worst)      | Medium     |
| Shell Sort        | O(n log n) (best)   | Medium     |

1. Bubble Sort:
   - Time Complexity: O(n^2) for average, best, and worst cases.
   - How it works: Bubble Sort works by repeatedly swapping adjacent elements if they are in the wrong order. It compares each pair of adjacent elements and swaps them if they are in the wrong order. This process is repeated until the entire array is sorted.

2. Selection Sort:
   - Time Complexity: O(n^2) for average, best, and worst cases.
   - How it works: Selection Sort works by dividing the array into two parts: the sorted part and the unsorted part. It repeatedly selects the smallest (or largest) element from the unsorted part and swaps it with the element at the beginning of the unsorted part. This process is repeated until the entire array is sorted.

3. Insertion Sort:
   - Time Complexity: O(n^2) for average, best, and worst cases.
   - How it works: Insertion Sort works by dividing the array into two parts: the sorted part and the unsorted part. It iterates through the unsorted part and compares each element with the elements in the sorted part. It then shifts the elements in the sorted part to the right to make space for the current element and inserts it into the correct position. This process is repeated until the entire array is sorted.

4. Merge Sort:
   - Time Complexity: O(n log n) for average, best, and worst cases.
   - How it works: Merge Sort is a divide-and-conquer algorithm. It divides the array into two halves, recursively sorts each half, and then merges the two sorted halves to produce a sorted array. The merging process involves comparing elements from the two halves and placing them in the correct order.

5. Quick Sort:
   - Time Complexity: O(n log n) for average and best cases, O(n^2) for the worst case.
   - How it works: Quick Sort is also a divide-and-conquer algorithm. It selects a pivot element from the array and partitions the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. It then recursively sorts the sub-arrays. The choice of pivot can greatly affect the performance of the algorithm.

6. Heap Sort:
   - Time Complexity: O(n log n) for average, best, and worst cases.
   - How it works: Heap Sort uses a binary heap data structure to sort the elements. It first builds a max-heap from the array, which is a complete binary tree where the value of each node is greater than or equal to the values of its children. It then repeatedly extracts the maximum element from the heap and places it at the end of the array. This process is repeated until the entire array is sorted.

7. Radix Sort:
   - Time Complexity: O(nk) for average, best, and worst cases, where k is the number of digits in the maximum element.
   - How it works: Radix Sort is a non-comparative sorting algorithm that sorts the elements by their individual digits. It starts by sorting the elements based on the least significant digit, then the next least significant digit, and so on. This process is repeated until all the digits have been considered.

8. Counting Sort:
   - Time Complexity: O(n + k) for average, best, and worst cases, where n is the number of elements and k is the range of input values.
   - How it works: Counting Sort works by counting the number of occurrences of each element in the input array and using this information to determine the position of each element in the sorted output array. It requires that the input elements be integers and that the range of input values be known in advance.

9. Bucket Sort:
   - Time Complexity: O(n^2) for the worst case, but it can be improved to O(n) for average and best cases with certain assumptions.
   - How it works: Bucket Sort divides the input array into a number of equally sized buckets. It then distributes the elements into these buckets based on their values. Each bucket is then sorted individually, either using another sorting algorithm or recursively applying Bucket Sort. Finally, the sorted elements from all the buckets are concatenated to obtain the sorted array.

10. Shell Sort:
    - Time Complexity: O(n log n) for the best case, but it can degrade to O(n^2) for the worst case.
    - How it works: Shell Sort is an extension of Insertion Sort. It starts by sorting pairs of elements that are far apart, and then progressively reduces the gap between elements to be compared. This process is repeated until the gap becomes 1, at which point the algorithm performs a standard Insertion Sort. The idea is to move elements that are far apart towards their final position, which makes the array partially sorted and reduces the number of comparisons needed by the final Insertion Sort step.
