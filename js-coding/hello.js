//Create a function that will capitalize the first letter of word in a text.


function convert(string){
    const str2 = string.charAt(0).toUpperCase() + string.slice(1);
    console.log(str2);
}
convert('hello')