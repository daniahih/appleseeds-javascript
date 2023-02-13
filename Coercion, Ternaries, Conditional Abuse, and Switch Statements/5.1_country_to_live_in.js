// Let's say Sarah is looking for a new country to live in. She
// wants to live in a country that speaks English, has less
// than 50 million people, and is not an island.
// ('english', false, <50 ,country )



function countryToLiveIn( language, isIsland, population,country){
    if(language === "english" && isIsland  == false &&  population < 50 ){
        console.log(`'You should live in ${country}` )
    }
    else{
        console.log(`${country} does not meet your criteria` )
    }
    }
    countryToLiveIn( "english", false, 9,"palestine")
    countryToLiveIn( "arabic", false, 13,"london")
    countryToLiveIn( "english", true, 9,"qatar")
