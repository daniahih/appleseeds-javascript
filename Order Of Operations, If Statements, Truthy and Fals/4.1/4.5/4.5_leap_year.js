function leapYear(year){
    if( (year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)){
        console.log(`${year} It is indeed a leap year`)
    }
    else{
        console.log( `${year} This is not a leap year`)
    }
}
leapYear(2012)
leapYear(2400)
leapYear(2100)