// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110


let dolphinsScore = [96,108,89]
let koalasScore =[88,91,110]

dolphinsAverage = (dolphinsScore[0]+dolphinsScore[1]+dolphinsScore[2])/3
koalasAverage = (koalasScore[0]+koalasScore[1]+koalasScore[2])/3

if(dolphinsAverage>koalasAverage){
    console.log(`The average score of Team dolphins (${dolphinsAverage})  is greater than team koalas average score(${koalasAverage}).`)
}
else if(dolphinsAverage == koalasAverage){
    console.log('Average score of team dolphins and team koalas are same.')
}
else{
    console.log(`The average score of team koalas(${koalasAverage}) is greater than average score of team dolphins(${dolphinsAverage}).`)
}