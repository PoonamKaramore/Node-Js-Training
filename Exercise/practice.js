// const numbers = [1,2,3,4];
// const first = numbers.shift();
// console.log(numbers);
// console.log(first);

// const word = 'abcd';
// const newword = word.slice(0,3);
// console.log(newword);

// let numbers=[1,2,3];
// numbers.length = 0;
// console.log(numbers);

// const first = [1,2,3];
// const second = [4,5,6];
// const combined = [...first,'a',...second];
// console.log(combined);

//iterating over an array

// const arr = [true,false,false,true,true];
// count = 0
// for(let element of arr)
//     if(element === true)
//     count += 1;
// console.log(count);

// const numbers = [0,1,2,3,4,5,6];
// for(let number of numbers)
//   if(number%2 ==0)
//       console.log('even' , number);
//   else 
//      console.log('odd', number);

// const numbers = [0,1,2,3,4,5,6];
// const joined = numbers.join(',');
// console.log(joined);

//const num = [4,2,1,6];
//num.reverse();
// num.sort();
// console.log(num);

// const numbers = [1,2,3,4];
// const min = numbers.shift();
// const max= numbers.pop();

// console.log(min,max);

// const numbers = [4, 9, 16, 25];
// const square = numbers.map(Math.sqrt);
// console.log(numbers,square);

//palindrome

// function checkpal(str){
//     const len = str.length;
//     for(i=0; i<len/2; i++){
//         if(str[i] !== str[len - i-1])
//           return 'it is not a palindrome';
//     }
//     return 'it is a palindrome';
// }
// console.log(checkpal('sand'));

//prime number
// function isPrime(number){
//     if(number == 1)
//       console.log(' a prime number');
//     else if(number <0)
//       console.log('not a prime number');
//     else if(number>1)
//       for(i=2; i<=number;i++)
//        if(number%i == 0)
//         return 'not a prime number';
// }
// console.log(isPrime(25));

//factorial

// function factNum(num){
//     let fact = 1;
//     if(num == 0 || num == 1)
//       return fact;
//     else if(num>1){
//       for(let i=num; i>=1; i--)
//           fact *= i;
//     return fact;
//     }
//     else  
//       return 'num has to be positive';
// }
// console.log(factNum(4));



