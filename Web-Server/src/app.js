const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode=require('./utils/geocode')
const forecast = require('./utils/forecast')

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
        title:'Weather',
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

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})
app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error: 'you must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products:[]
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        name:'Poonam karamore',
        errormsg:'Page not found!!!!!!!!!!!!!!!'
    })
})


app.listen(3000,()=>{
    console.log('server is up on port 3000.')
})


