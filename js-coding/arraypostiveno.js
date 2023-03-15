//Create a function that receives an array of numbers and 
//returns an array containing only the positive numbers.

function array(number){
    let positivearray = []
    for(i=0; i<number.length; i++){
        if(number[i]>=0){
            positivearray.push(number[i])
        }
    }
    return positivearray;
}
let positivearray = array([-1,2,3,4])
console.log(positivearray)

//using filter 

function getpositive(num){
    return num.filter(element => element>=0)
}
let positivearr = getpositive([-4,6,7,-9])
console.log(positivearr)