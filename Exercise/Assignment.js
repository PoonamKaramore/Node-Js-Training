//1) Write a function that takes an array of numbers and returns a new array with only 
//the even numbers from the original array.

function evenArray(array1){
    let result=[];
    for(let i=0 ; i<array1.length ; i++){
        if(array1[i]%2==0){
            result.push(array1[i])
        }
        
    }
    return result;
}

const even = [1,2,3,4,5,6]
console.log(evenArray(even))

//2) Write a function that takes a string as input and returns the reverse of the string.
function reverse(str){
    let revs="";
    for(let i=str.length-1 ; i>=0 ; i--){
        revs=revs+str[i];
    }
    return revs;
}
const input="task";
console.log(reverse(input));

//3)Write a function that takes two numbers as input and returns the larger of the two numbers.
function largest(a,b){
    if(a>b){
        console.log(a +" is largest")
    }else{
        console.log(b +" is largest")
    }
}
console.log(largest(1,4))

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

//5) Write a function that takes an array of numbers and 
//returns a new array with only the even numbers from the original array.

function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {  
        if(array[i]%2==0){
            console.log(sum += array[i]);   
        } 
    }  
}
sumArray([1, 4, 0, 9]); 