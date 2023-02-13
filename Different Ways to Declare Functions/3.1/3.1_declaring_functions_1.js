// * Please reformat the following function
// declarations to function expression.
// * Please reformat the following function
// expressions to function declarations.


// function welcome() {
//     let welcome = 'Welcome to Appleseeds Bootcamp!';
//     return welcome;
//     }

    const welcome = () => 'Welcome to Appleseeds Bootcamp!'
 console.log(welcome())


    // function power(a) {
    // let myNumber = a;
    // let result = Math.pow(myNumber, 2);
    // return result;
    // }
     const power = (a) => Math.pow(a,2)
console.log(power(5))



    // function add(a, b = 5) {
    // let myNumber = a;
    // let sum = myNumber + b;
    // return sum;
    // }
    const add = (a, b)=> a+b 
console.log(add(2,3))
     // the diffrence between the declarations and expressions that in expressions i can remove
     // the function name and add it in a varible and then call it 

     // From function expressions to function declarations


// const hello = () => "Hello!";

function hello(){
    return "Hello!"
}

console.log(hello())

// const squareRoot = a => Math.sqrt(a);
 function squareRoot(number){
    let a = number;
    let result = Math.pow(a,2)
      return result
 }
 console.log(squareRoot(5))


// const randomNumbers = (a, b) => Math.random() * (a - b) +b;
 function randomNumbers(a, b){
let result = Math.random() * (a - b) +b;
return result 
 }
 console.log(randomNumbers(5, 4))