let arr = [1,2,3,4];
let searchelement = 4;

function incl(arr,searchelement){
    for(let element of arr)
      if(element == searchelement)
       return 'element found';
    return 'element not found';
}
console.log(incl(arr,searchelement));