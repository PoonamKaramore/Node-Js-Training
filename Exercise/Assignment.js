//1)Write a function that takes an array of numbers and 
//returns the sum of all the numbers in the array.

let sum=0
function SumArray(array){
    for(i=0; i<array.length; i++){
        sum += array[i]
    }
    console.log(sum)
}
console.log(SumArray([1,2,3]))

//2) Write a function that takes a string as input and returns the reverse of the string.
function revString(str){
    let splitStr = str.split("")
    let reverseStr = splitStr.reverse()
    let output = reverseStr.join("")
    return output
}
console.log(revString("hello"))

//3)Write a function that takes two numbers as input and returns the larger of the two numbers.
function largest(a,b){
    if(a>b){
        console.log(a +" is largest")
    }else{
        console.log(b +" is largest")
    }
}
const largestNum = largest(2,6)
console.log(largestNum)

//4)Write a function that takes an array of strings and 
//returns a new array with all the strings converted to uppercase.

function convert(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
      output.push(array[i].toUpperCase());
    }
    return output;
  }
  const myArray = ["apple","kiwi","banana"];
console.log(convert(myArray));

//5) Write a function that takes an array of numbers and returns a new array with only 
//the even numbers from the original array.

function evenNumArray(arr){
    let result=[];
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
        
    }
    return result;
}
const even = [1,2,3,4,5,6]
console.log(evenNumArray(even))
