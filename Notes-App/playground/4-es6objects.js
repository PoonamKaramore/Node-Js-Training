//Object Property shorthand
const name= 'poonam'
const age = 21

const user ={
    name,
    age,
    location:'India'
}
console.log(user)

//object destructuring
const product = {
    label:'Notebook',
    price:100,
    stock:20,
    salePrice:undefined

}
const {label,stock} = product
console.log(label)
console.log(stock)