// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

let markMass = 78
let johnMass = 92
let markHeight = 1.69
let johnHeight = 1.95

markBMI = markMass/(markHeight*markHeight)
console.log(markBMI)

johnBMI = johnMass/(johnHeight*johnHeight)
console.log(johnBMI)

markHigherBMI = markBMI>johnBMI
console.log(markHigherBMI)