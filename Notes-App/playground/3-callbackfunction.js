//callback function

// const names = ['Poonam','Payal','Jess']
// const shortnames = names.filter((name)=>{
//     return name.length<=8
// })
// console.log(shortnames)

// setTimeout(() =>{
//     console.log('2 secs are up')
// },2000)
const geocode =(address,callback)=>{
    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data)
    },2000)
}
geocode('Newyork',(data)=>{
    console.log(data)
})

//challenge: define an add function that accepts correct arguments.
//Use setTimeout to simulate 2sec delay.
//after 2 secs are up call callback function.test your work

const add =(a,b,callback) =>{
    setTimeout(()=>{
        const addition = a+b;
        callback(addition)
    },2000)
}
add(1,4,(addition)=>{
    console.log(addition)
})

