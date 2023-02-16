const request = require('postman-request')
const forecast = (latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=a3ee7bf4bfd44e3e8aa2c0ecaec3ad37&query=' + latitude + ',' + longitude  
    request({url:url, json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to weather service!!',undefined)
        }
        else if(response.body.error){
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined,response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
        }
    })
}
module.exports = forecast
  