const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
const  days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];



const  today = new Date();
let monthName = monthNames[today.getMonth()]; 
console.log(monthName)

const year = today.getFullYear()
console.log(year)
const day = today.getDate()
console.log(day)

const dayName = days[today.getDay()]
console.log(dayName)


function date(){
    return ` Today is ${dayName} the ${day} in ${monthName}  in ${year}`
}
console.log(date())