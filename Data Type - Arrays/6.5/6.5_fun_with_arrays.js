// 1. Fill an array with 100 of the same object using the array fill
// method.
const Arr =Array(100).fill("dania")
console.log(Arr);

//  2. Create an array with numbers ranging from 1-100 using
//  the Array.from method.
const arrayRange = (start, stop, step) =>
    Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
    );

console.log(arrayRange(1, 100, 1)); 
 
// Convert only values of an object into one array.

const obj={
    firstname:"dania",
    lastname:"hih",
    age:24
}
const objValues=Object.values(obj)
console.log(objValues);

// Convert an array into one object.
const array=["mohammad","hhss",25]
const obj2=Object.assign({},array)
console.log(obj2)

// Find out if an array is an array.
const arr=["dania","moh",'yishai']
 console.log(Array.isArray(arr))

//  6. Copy an array.
// ● Create a copy of an array that won’t affect the
// original array if modified.
const arr1=["dnaia","hih","mohammad"]
const arr2=arr1.slice(0)
console.log(arr2)


// ● Create a copy of an array that will affect the original
// array if modified.
const arr3=["dania","yishai","mohammd"]
const arr4=arr3; // here everymodify will be affected 
console.log(arr4)
arr4.push("hih")
console.log(arr3)
console.log(arr4)
