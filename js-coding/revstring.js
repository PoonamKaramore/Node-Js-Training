// reverse a string

function reverse(string){
    let array = string.split('')
    let rev = array.reverse()
    let output = rev.join('')
    console.log(output)
}
reverse('my name is poonam')
