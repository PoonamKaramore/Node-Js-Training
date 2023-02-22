// const array = [1,2,3,4]
// const count = array.length
// console.log(count)

total= 0
function count(arr){
    for(let i=0;i<arr.length; i++){
        total += arr[i]
    }
    return total
}
console.log(count([1,2,3]))