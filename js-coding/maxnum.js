// Find the maximum number in an array of numbers.

var arr = [3, 6,56,2,29];
var largest = arr[0]; //largest = 56

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i]; //56
    }
}
console.log(largest);



