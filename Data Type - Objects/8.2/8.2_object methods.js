// 1. Create an object called ‘mycountry’ for a country of your
// choice, containing properties ‘country’, ‘capital’,
// ‘language’, ‘population’ and ‘neighbours’ (an array)

const mycountry ={
    country: "palestine ",
    capital:"jerusalem",
    language :"arabic",
    population:9,
    neighbours:["jordan,lebenon,syria"],
    describe:function() {
        return `${this.country} has ${this.population}millon people ,  their mother tongue is ${this.language} they have 3 neighbouring countries ${this.neighbours}and a capital called ${this.capital}`
      },
      checkIsland: function(){
        if(this.neighbours === []){
            return true 
        }
        else {
            return false 
        }
      }
}

// 2. Add a method to the object called 'describe' to the
// 'myCountry' object. With the help of the ‘this’ keyword, this
// method will log a string like this to the console: ‘Finland
// has 6 million people, their mother tongue is Finnish, they
// have 3 neighbouring countries and a capital called
// Helsinki’.


// 3. Call the ‘descrbie method’.
console.log(mycountry.describe())
console.log(mycountry.checkIsland())
// 4. Add a method called 'checkIsland' to the 'myCountry'
// object. This method will set a new property on the object,
// called 'isIsland'. 'isIsland' will be true if there are no
// neighbouring countries, and false if there are. Use the
// ternary operator to set the property.