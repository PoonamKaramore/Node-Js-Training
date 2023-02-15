const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

//defining paths
const publicdirectorypath = path.join(__dirname , '../public')
const viewpath = path.join(__dirname , '../templates/views')
const partialpath = path.join(__dirname , '../templates/partials')

//setup of handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory
app.use(express.static(publicdirectorypath))

app.get('',(req,res)=>{
    res.render('home',{
        title:'Weather App',
        name:'Poonam karamore'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Me',
        name:'Poonam karamore'
    })
})

//create a template for help page 
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help?',
        name:'Poonam karamore',
        msg: 'This is help page'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        location:'newyork',
        forecast:'sunny'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Poonam karamore',
        errormsg:'Page not found!!!!!!!!!!!!!!!'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Poonam karamore',
        errormsg: 'Help article not found!!!!'
    })
})


app.listen(3000,()=>{
    console.log('server is up on port 3000.')
})


