//using timeout
// console.log('starting')
// setTimeout(()=>{
//     console.log('zero seconds timer')
// },0)
// setTimeout(()=>{
//     console.log('2 seconds timer')
// },2000)
// console.log('stopping')

const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=a3ee7bf4bfd44e3e8aa2c0ecaec3ad37&query=37.8267,-122.4233&units=f'
// request({url:url, json:true},(error,response)=>{
//     console.log(response.body.current)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current)

// })

//challenge: print a small forecast to the user.
//it prints 'It is currently 58.55 degrees out.There is 0% chances of rain.
request({url:url, json:true},(error,response)=>{
    // console.log('It is currently ' + response.body.current.temperature + ' degrees out.' + 'There is '+ response.body.current.precip + ' % chances of rain.')
    console.log(response.body.current.weather_descriptions[0] + '.It is currently ' + response.body.current.temperature + ' degrees out.' + 'It feels like '+ response.body.current.feelslike + ' degrees out.')
}) 

//geocoding
