const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
const port = process.env.PORT || 9000
const query = require('./db/queries')
const homeRoutes = require('./routes/home')

app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use('/', express.static('public'))

app.use(cookieSession({
    name: 'session',
    keys: ['keyboard cat'],

    //cookie options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use('/', homeRoutes)


app.listen(port, () => {
    console.log(`ITS OVER ${port}`)
})
