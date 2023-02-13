const fs = require('fs')
const chalk= require('chalk')

const addNotes = function(title,body){
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)

    //debugger
    
    if(!duplicateNote){
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'))
    }
    else{
        console.log(chalk.red.inverse('note title taken!'))
    }
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes) 
    fs.writeFileSync('notes.json',dataJSON)

}

const loadNotes = ()=>{
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON) 
    }
    catch(e){
        return []
    }
}

//challenge: use chalk to provide useful logs
//if a note is removed print it with green background
//if a note is not removed print it with red background

const removeNotes = (title)=>{
    const notes = loadNotes()
    const notestokeep = notes.filter((note)=>note.title !==title)

    if(notes.length>notestokeep.length){
        console.log(chalk.green.inverse('note removed successfully'))
        saveNotes(notestokeep)
    }
    else{
        console.log(chalk.red.inverse('no note found'))
    }
}

const listNotes = ()=>{
    const notes = loadNotes()
    console.log(chalk.green.inverse('your notes'))
    notes.forEach((note)=>{
        console.log(note.title)
    }

)}

const readNotes = (title)=>{
    const notes = loadNotes()
    const  note = notes.find((note)=> note.title ===title)

    if(note){
      console.log(chalk.blue.inverse(note.title))
      console.log(note.body) 
    }
    else{
        console.log(chalk.red.inverse('No note found!'))
    }
}

module.exports = {
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}