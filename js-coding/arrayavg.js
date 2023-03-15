//Calculate the average of the numbers in an array of numbers.

let sum=0
function arrayaverage(number){
    for(i=0; i<number.length; i++){
        sum += number[i]
        length = number.length
        average = sum/length       
    }
    console.log('The average of an array is ' + average)
}
arrayaverage([1,2,3,4])
