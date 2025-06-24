function mincost(arr) {
  if (arr.length <= 1) return 0;

  // Use a priority queue (min-heap)
  const minHeap = [...arr];
  minHeap.sort((a, b) => a - b);

  let totalCost = 0;

  while (minHeap.length > 1) {
    const first = minHeap.shift();
    const second = minHeap.shift();
    const cost = first + second;
    totalCost += cost;

    // Insert the new rope and keep heap sorted
    minHeap.push(cost);
    minHeap.sort((a, b) => a - b);
  }

  return totalCost;
}

// Example usage:
console.log(mincost([4, 3, 2, 6]));  // Output: 29
console.log(mincost([1, 2, 3, 4, 5]));  // Output: 33

