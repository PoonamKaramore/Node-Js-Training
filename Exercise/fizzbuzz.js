function fizzbuzz(input){

    if(input%3 == 0 && input%5 == 0)
      return 'FizzBuzz';

    if(typeof input !== 'number')
      return 'not a number';

    if(input%3 == 0)
      return'Fizz';

    if(input%5 == 0)
       return 'Buzz';

    return input;
}
console.log(fizzbuzz(13));