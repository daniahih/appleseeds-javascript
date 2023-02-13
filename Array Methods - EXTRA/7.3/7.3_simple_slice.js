const fruits = ["Banana", "Orange", "Lemon","Apple", "Mango"];
// Use slice create a new array that will remove all the
// elements from the array except “Orange” and “Lemon”
fruits.shift();
console.log(fruits)
const newArr=fruits.slice(0,-2)
console.log(newArr)
