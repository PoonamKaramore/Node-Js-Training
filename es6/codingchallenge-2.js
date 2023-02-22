// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

let markMass = 78
let johnMass = 92
let markHeight = 1.69
let johnHeight = 1.95

markBMI = markMass/(markHeight*markHeight)

johnBMI = johnMass/(johnHeight*johnHeight)

if(markBMI>johnBMI){
    console.log(`Mark BMI (${markBMI}) is greater than John's BMI (${johnBMI}).`)
}
else{
    console.log(`John's BMI (${johnBMI}) is greater than Mark BMI (${markBMI}).`)
}

