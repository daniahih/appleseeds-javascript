function grade(score){
if(score > 0 && score <65){
    console.log("F")
}
else if (score >= 65  && score <69){
    console.log("D")  
}
else if (score >= 69  && score <79){
    console.log("C")  
}
else if (score >= 80  && score < 89){
    console.log("B")  
}
else if (score >= 90  && score <100){
    console.log("A")  
}

}
console.log(grade(75))
console.log(grade(99))
console.log(grade(55))

