const express = require('express')
const mongoose = require('mongoose')
const { dirname } = require('path')
const path = require('path')
const hbs = require('hbs')
const dotenv= require('dotenv')

const app = express()

dotenv.config()

const Connect = require('./models/contactSchema')

const static_path = path.join(__dirname, './public')
const template_path = path.join(__dirname, './template/views')
const partial_path = path.join(__dirname, './template/partials')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(static_path))
app.set('view engine', 'hbs')
app.set('views', template_path)
hbs.registerPartials(partial_path)

app.get('/', (req, res) => {
    res.render('index')
})
app.post('/', async (req, res) => {
    try {
        const { username, number, email, message } = await req.body
        await Connect({ username, number, email, message }).save()
        res.status(200).render("index")
    } catch (error) {
        res.status(400).send(error)
        throw new Error(error)
    }
})

mongoose.connect(process.env.MONGO, {
    useCreateIndex: true, useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('CONNECITON TO DATABASE')).catch((e) => console.log(e))

app.listen(process.env.PORT || 5000, () => console.log('SERVER UP AND RUNNING'))