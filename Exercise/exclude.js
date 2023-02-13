let arr = [1,2,3,4];
let number = [3];

function excludeNumber(arr,number){
    const newarray = [];
    for(let element of arr)
      if(!number.includes(element))
        newarray.push(element);
        return newarray;
}
console.log(excludeNumber(arr,number));