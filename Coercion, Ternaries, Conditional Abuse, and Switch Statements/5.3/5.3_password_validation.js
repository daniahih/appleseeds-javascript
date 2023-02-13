function passwordValidation(password){
    if(password.length>7){
        console.log("strong")
    }
    else{
        console.log("weak")
    }
}

// condition ? exprIfTrue : exprIfFalse
password.length >7 ?   console.log("strong"): console.log("weak") 

passwordValidation("daniahih")
 

function passwordValidation2(password){
    if(password.length >7 && password != "")
    {
        console.log("strong ")
    }
    else{
        console.log('weak')
    }
}
passwordValidation2("danahihhh")
passwordValidation2("hih")
passwordValidation2(" ")

function validationPasswordAdvanced(password){
    const capitalLetters = /[A-Z]/;
    // This is a regular expression that matches capital letters
    if(password.length > 7 && password.match(capitalLetters)){
        console.log('verystrong')
    }
    else{
        console.log('weak')
    }
}
validationPasswordAdvanced("Daniahih")