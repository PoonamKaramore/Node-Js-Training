//Calculate the sum of numbers in an array of numbers.

let sum=0;
function arraysum(number){
    for(let i=0; i<number.length; i++){
        sum += number[i];
    }
    console.log(sum)
}
arraysum([1,2,3,4,5])