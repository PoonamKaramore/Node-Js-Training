// check whether the string is a palindrome or not using a function.

function checkPalindrome(string){

    let str = string.split('')
    let reverse = str.reverse()
    let output = reverse.join('')

    if(output == string){
        console.log('It is a palindrome')
    }
    else{
        console.log('It is not a palindrome')
    }

}
checkPalindrome('madam') 