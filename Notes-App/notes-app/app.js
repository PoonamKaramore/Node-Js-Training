//imported a file system module
// used writeFileSync function to create a new file and displayed the output 
// const fs = require('fs')
// fs.writeFileSync('notes.txt','This is the first file created using node js.')


const notes = require('./notes')
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe:'add new notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler: (argv) =>{
        notes.addNotes(argv.title,argv.body)

    }
})

//challenge: create remove note command to take the required title and call it in remove command handler.
//create and export remove note function and log it.
//use array filter to remove the note and test the function.

yargs.command({
    command:'remove',
    describe:'remove notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'List all the notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler: (argv)=>{
        notes.listNotes(argv.title)
    }
})

yargs.command({
    command:'read',
    describe:'read notes',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
    },
    handler: (argv)=>{
        notes.readNotes(argv.title)
    }
})

yargs.parse()


