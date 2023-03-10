// geocode using callback function
const request = require('postman-request')
const geocode= (address,callback)=>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoicG9vbmFtayIsImEiOiJjbGU0M2tyeHkwOHowM29tcm5iNHZ3d3ZiIn0.gtZ4BY-VFhi3FijNyj-bFg'
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Unable to connect to location services',undefined)  
        }
        else if(response.body.features.length === 0){
            callback('unable to find the location try another search',undefined)
        }
        else{
            callback(undefined,{
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode  