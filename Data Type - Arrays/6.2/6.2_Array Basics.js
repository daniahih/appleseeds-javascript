const people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a loop, iterate through this array and console.log all
// of the people.
 for( let i=0; i<people.length ;i++){
    console.log(people[i])
 }
//  2. Write the command to remove "Greg" from the array.
// i will use shift to remove from the array start 
people.shift("Greg")
console.log(people)
// Write the command to remove "James" from the array.
people.pop()
console.log(people)
// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt")
console.log(people)

// 5. Write the command to add your name to the end of the
// array.
people.push("dania")
console.log(people)

// 6. Using a loop, iterate through this array, and after
// console.log "Mary", exit from the loop.
// ['Matt', 'Mary', 'Devon', 'dania']
 for( let i=0 ;i<people.length;i++){
console.log(i,people[i])
if(people[i] =='Mary')
break;
 }


//  7. Write the command to make a copy of the array using a
// slice. The copy should NOT include "Mary" or "Matt".

const newArr=people.slice(2)
console.log(newArr)

// 8. Write the command that gives the indexOf where "Mary"
// is located.
 const value =people.indexOf("dania");
 console.log(value)
//  9. Write the command that gives the indexOf where "Foo" is
//  located (this should return -1).
const foo = people.indexOf("foo")
console.log(foo)

// 10. Redefine the people variable with the value you started
// with. Using the splice command, remove "Devon" from
// the array and add "Elizabeth"
// and "Artie". Your array should look like this when you are
// done ["Greg", "Mary", "Elizabeth", "Artie",
// "James"].

const people1 = ["Greg", "Mary", "Devon", "James"];
// splice(start, deleteCount, item1)
const removed = people1.splice(2, 1, "Elizabeth", "Artie");

console.log(removed)
console.log(people1)

// 11. Create a new variable called withBob and set it equal
// to the people array concatenated with the string of "Bob".
 const withBob = people.concat("Bob")
 console.log(withBob)