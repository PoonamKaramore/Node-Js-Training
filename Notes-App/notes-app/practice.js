
const fs = require('fs')

//challenge : use appendFileSync to append through file
// fs.appendFileSync('notes.txt','hello my name is poonam.')

// //importing data from a new file(utils.js)
// const firstName = require('./utils')
// console.log(firstName)


// //importing function that performs addition
// const sum = require('./utils')
// const addition = sum(2,2)
// console.log(addition)


// // challenge: create a function getnotes() that returns your notes... and export that into app.js file
// const notes = require('./utils.js')
// console.log(notes())


// //validator
// const validator = require('validator')
// console.log(validator.isEmail('poonam@gmail.com'))


// // chalk
// const chalk = require('chalk')
// console.log(chalk.green('success'))
// console.log(chalk.green.bold.underline('success'))


// //taking input from the user
const command = process.argv[2] 
if(command === 'add'){
    console.log('adding notes')
}
else if(command === 'remove'){
    console.log('removing notes')
}
console.log(process.argv)
// //yargs
// const yargs = require('yargs')
// console.log(yargs.argv)

//creating add command for adding notes
// yargs.command({
//     command: 'add',
//     describe: 'adding a new note',
//     handler: function(){
//         console.log("adding note")
//     }
// })
// console.log(yargs.argv)

// //creating remove command for removing notes
// yargs.command({
//     command: 'remove',
//     describe: 'remove a note',
//     handler: function(){
//         console.log("removing note")
//     }
// })
// console.log(yargs.argv)

//challenge: creating two new command that supports list and read command 
//test your work by printing the output

//creating list command
// yargs.command({
//     command: 'list',
//     describe: 'list your note',
//     handler: function(){
//         console.log("listing out all the notes")
//     }
// })

//creating  read command 
// yargs.command({
//     command: 'read',
//     describe: 'read your notes',
//     handler: function(){
//         console.log("reading notes")
//     }
// })
// console.log(yargs.argv)

//customizing add command
// yargs.command({
//     command: 'add',
//     describe: 'adding a new note',
//     builder:{
//         title:{
//             describe:'add title of a note',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function(argv){
//         console.log('title: '+ argv.title)
//     }
// })
// yargs.parse()

//challenge : customize add command by adding body property
//configure the description ,make it as required
//log the body value in the handler function

// yargs.command({
//     command: 'add',
//     describe: 'adding a new note',
//     builder:{
//         title:{
//             describe:'add title of a note',
//             demandOption: true,
//             type: 'string'
//         },
//         body:{
//             describe:'add the description',
//             demandOption: true,
//             type:'string'
//         }
//     },
//     handler: function(argv){
//         console.log('title: '+ argv.title +','+ ' body: '+argv.body)
//     }
// })
// yargs.parse()