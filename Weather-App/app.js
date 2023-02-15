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
//const url = 'http://api.weatherstack.com/current?access_key=a3ee7bf4bfd44e3e8aa2c0ecaec3ad37&query=37.8267,-122.4233&units=f'
// request({url:url, json:true},(error,response)=>{
//     console.log(response.body.current)
    // const data = JSON.parse(response.body)
    // console.log(data.current)

//})

//challenge: print a small forecast to the user.
//it prints 'It is currently 58.55 degrees out.There is 0% chances of rain.
//request({url:url, json:true},(error,response)=>{
    // console.log('It is currently ' + response.body.current.temperature + ' degrees out.' + 'There is '+ response.body.current.precip + ' % chances of rain.')
    //console.log(response.body.current.weather_descriptions[0] + '.It is currently ' + response.body.current.temperature + ' degrees out.' + 'It feels like '+ response.body.current.feelslike + ' degrees out.')
//}) 

//geocoding
// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9vbmFtayIsImEiOiJjbGU0M2tyeHkwOHowM29tcm5iNHZ3d3ZiIn0.gtZ4BY-VFhi3FijNyj-bFg'
// request({url:geocodeURL,json:true},(error,response)=>{
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(latitude,longitude)

// })

//handling error
//for weather stack
// const url = 'http://api.weatherstack.com/current?access_key=a3ee7bf4bfd44e3e8aa2c0ecaec3ad37&query=37.8267,-122.4233'
// request({url:url, json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!!')
//     }
//     else if(response.body.error){
//         console.log('unable to find location')
//     }
//     else{
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out.' + 'There is '+ response.body.current.precip + ' % chances of rain.')
//     }
// })

//challenge: handling error for geocoding request
// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicG9vbmFtayIsImEiOiJjbGU0M2tyeHkwOHowM29tcm5iNHZ3d3ZiIn0.gtZ4BY-VFhi3FijNyj-bFg'
// request({url:geocodeURL,json:true},(error,response)=>{
//     if(error){
//         console.log('Unable to connect to location service!!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('unable to find the location try another search')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)
//     }
// }) Los%20Angeles

// geocode using callback function
const geocode=require('./utils/geocode')
geocode('Boston',(error,data)=>{
    console.log('Error ',error)
    console.log('Data ',data)
})

// challenge : create a reusable function for getting the forecast
//setup forecast function in utils/forecast.js
//Thw forecast function should have 3 callbacks : low level error , coordinate level error,success