const numbers = [1,2,3,4];


function move(numbers,index,offset){
    const output = [...numbers];
    const element = output.splice(index,1)[0];
    output.splice(index+offset,0,element);
    return output;
}
console.log(move(numbers,0,2));