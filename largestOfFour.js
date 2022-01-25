// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].


function largestOfFour(arr) {
 const totalLargeArr = []
 for (let i in arr) {
  totalLargeArr.push(Math.max(...arr[i]))
 }
 return totalLargeArr
}

console.log(largestOfFour([[4, 77, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))

// loop over the array
// spread out each array at index and find the highest number
// push the highest number into an array and return