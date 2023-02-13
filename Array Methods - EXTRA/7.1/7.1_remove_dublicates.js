// Create a function that received an array of integers as a
// parameter.
// Return a new array without any duplicates inside. You
// indexOf as part of your solution.

function removeDuplicates(array) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
      if (newArr.indexOf(array[i]) === -1) {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }
  console.log(removeDuplicates([2,3,2,4,5,6,7,3,4]))