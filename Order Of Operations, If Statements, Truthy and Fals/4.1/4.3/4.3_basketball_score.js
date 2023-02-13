// John and Mike both play basketball on different teams. In the
// latest 3 games, John's team scored 89, 120, and 103 points,
// while Mike's team scored 116, 94, and 123 points.
// 1. Calculate the average score for each team.
// 2. Decide which team wins on average (highest average
// score), and print the winner to the console. Also include
// the average score in the output.
// 3. Then change the scores to show different winners. Don't
// forget to take into account that there might be a draw (the
// same average score).
// 4. EXTRA: Mary also plays basketball, and her team scored
// 97, 134, and 105 points. Like before, log the average
// winner to the console.
// 5. Like before, change the scores to generate different
// winners, keeping in mind there might be draws.



//1
function avg(num1,num2,num3){
    return (num1+num2+num3)/3 
}
 //2
//  const johnTeamAvg = (avg(89,120,103)) // avarage for John team 
// const mikeTeamAvg =(avg(116,94,123)) // avarage for Mike team 


//3 change the score 
const johnTeamAvg = (avg(120,120,140)) 
const mikeTeamAvg =(avg(116,94,123))
 const MaryTeamAvg =(avg(97,170,120))
console.log(johnTeamAvg);
console.log(mikeTeamAvg);
console .log(MaryTeamAvg);

function winner(){
    if(johnTeamAvg  > mikeTeamAvg  && johnTeamAvg > MaryTeamAvg ){
        console.log(`john team winner with avg ${johnTeamAvg} `)
       
    }
     else if 
        ( mikeTeamAvg > johnTeamAvg && johnTeamAvg > MaryTeamAvg ){
            console.log(`mike team winner with avg ${mikeTeamAvg} `)
        }
    else{
        console.log(`mary  team winner with avg ${MaryTeamAvg} `)
    }
}
winner();
