export default {
    Euclidean:`The Euclidean algorithm is named after the ancient Greek mathematician Euclid, who first described it in his book "Elements". It is an efficient method for computing the greatest common divisor (GCD) of two integers.

1. Identify the Two Numbers:
   - Let the two numbers be a and b, where a >= b.

2. Initial Check:
   - If b = 0, then GCD(a, b) = a. You can stop here.

3. Divide and Find the Remainder:
   - Divide a by b to find the quotient and the remainder. Mathematically, this can be expressed as:
     a = bq + r
     where q is the quotient and r is the remainder. This can also be written as:
     r = a % b

4. Update the Numbers:
   - Replace a with b and b with r.

5. Repeat the Process:
   - Repeat steps 2-4 until b becomes 0. The last non-zero remainder is the GCD of the original two numbers.

Example:
Let's find the GCD of 252 and 105 using the Euclidean algorithm.

1. Initial numbers:
   - a = 252
   - b = 105

2. First iteration:
   - 252 / 105 gives a quotient of 2 and a remainder of 42.
   - Update a = 105, b = 42.

3. Second iteration:
   - 105 / 42 gives a quotient of 2 and a remainder of 21.
   - Update a = 42, b = 21.

4. Third iteration:
   - 42 / 21 gives a quotient of 2 and a remainder of 0.
   - Update a = 21, b = 0.

5. Conclusion:
   - Since b = 0, the GCD is the last non-zero remainder, which is 21.

Therefore, the GCD of 252 and 105 is 21.
`,
    HeapSort:`Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. Here are the steps to perform heap sort:

1. Build a Max-Heap:
   - Rearrange the array into a max-heap. In a max-heap, the parent node is always greater than or equal to its child nodes.

2. Extract Elements from the Heap:
   - Swap the first element of the array (the largest element) with the last element.
   - Reduce the size of the heap by one.
   - Heapify the root element to ensure the max-heap property is maintained.

3. Repeat the Process:
   - Continue extracting the maximum element and heapifying the root until the entire array is sorted.

### Detailed Steps

1. Build a Max-Heap:
   - Start from the last non-leaf node and heapify each node up to the root.
   - For an array of size n, the last non-leaf node is at index Math.floor(n/2) - 1.

2. Heapify Function:
   - Heapify is a recursive process to maintain the max-heap property.
   - Compare the current node with its left and right children.
   - Swap the current node with the largest of its children if the max-heap property is violated.
   - Recursively heapify the affected sub-tree.

3. Sort the Array:
   - Swap the first element (max element) with the last element.
   - Reduce the size of the heap by one.
   - Heapify the root element.
   - Repeat until the heap size is greater than 1.

### Example

Given an array: [4, 10, 3, 5, 1]

1. Build Max-Heap:
   - Initial Array: [4, 10, 3, 5, 1]

    Tree representation before heapify:
        4
       / \\
      10  3
     / \\
    5   1

   - Start from the last non-leaf node, index 1: [4, 10, 3, 5, 1]
   - Heapify index 1: [4, 10, 3, 5, 1] (no change needed)

    Tree representation after heapify at index 1:
        4
       / \\
      10  3
     / \\
    5   1

   - Heapify index 0: [10, 5, 3, 4, 1]

    Tree representation after heapify at index 0:
       10
       / \\
      5   3
     / \\
    4   1

2. Extract Elements:
   - Swap first and last: [1, 5, 3, 4, 10]

    Tree representation after swap:
       1
       / \\
      5   3
     / \\
    4   10

   - Reduce heap size and heapify root: [5, 4, 3, 1, 10]

    Tree representation after heapify:
       5
       / \\
      4   3
     / \\
    1   10

   - Swap first and second last: [1, 4, 3, 5, 10]

    Tree representation after swap:
       1
       / \\
      4   3
     / \\
    5   10

   - Reduce heap size and heapify root: [4, 1, 3, 5, 10]

    Tree representation after heapify:
       4
       / \\
      1   3
     / \\
    5   10

   - Swap first and third last: [3, 1, 4, 5, 10]

    Tree representation after swap:
       3
       / \\
      1   4
     / \\
    5   10

   - Reduce heap size and heapify root: [3, 1, 4, 5, 10]

    Tree representation after heapify:
       3
       / \\
      1   4
     / \\
    5   10

   - Swap first and fourth last: [1, 3, 4, 5, 10]

    Tree representation after swap:
       1
       / \\
      3   4
     / \\
    5   10

   - Reduce heap size and heapify root: [3, 1, 4, 5, 10]

    Tree representation after heapify:
       3
       / \\
      1   4
     / \\
    5   10

Final sorted array: [1, 3, 4, 5, 10]

Therefore, the sorted array is 
[1, 3, 4, 5, 10].
`
}