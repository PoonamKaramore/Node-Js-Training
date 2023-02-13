// challenge: work with JSON and file system
//load and parse the data.change the age and name property then stringify it.

const fs = require('fs')
const databuffer = fs.readFileSync('2-json.json') //loaded the data
const dataJSON = databuffer.toString() 
const user = JSON.parse(dataJSON) // converting JSON string into object

//changed the age and name property and saved it into json file
user.name = 'Poonam' 
user.age = 24
const userJSON = JSON.stringify(user)
fs.writeFileSync('2-json.json',userJSON)

