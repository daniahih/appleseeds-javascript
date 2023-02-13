// 1. Create an array containing 4 population values of 4
// countries of your choice. Store this array into a variable
// called 'populations'
function calculatePopulation(population){
    return ((population/7900) * 100)
}
const populations=[98,100,70,55,10]
// 2. Create a function called ‘populationPercentages’ that
// takes the population array as an argument.
function populationPercentages(populations){
  // 3. Inside the function, create an empty array called
// ‘percentages’.  
const percentages=[]
// 4. Use a for loop to iterate over the population array you
// received as an argument.

for(let i=0;i<populations.length;i++){
     percentages.push(calculatePopulation(populations[i]))
  console.log(percentages)
}

}
populationPercentages(populations)
// 5. On each iteration use the function we created earlier
// (module 3, ex.3.3-declarations vs expressions) for each
// element of the array.



// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.

// 2. To calculate the percentage, divide the given
// 'population' value by 7900 and then multiply by 100.