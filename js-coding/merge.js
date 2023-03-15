//Create a function that will merge two arrays and return the result as a new array.

//using spread operator
function merge(array1,array2){
    combinedArray = [...array1, ...array2]
    console.log(combinedArray)
}
merge([1,2],[3,4])

// using concat
function mergeArray(array1,array2){
    combinedArray = array1.concat(array2)
    console.log(combinedArray)
}
merge([1,2],[3,4])