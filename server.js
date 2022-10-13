const express = require('express')
const fruits = require('./models/fruits')

const app = express()

app.use(express.urlencoded({extended: false}))

// app.use((req, res,next) => {
//     console.log('I run for all routes')
//     next()
// })

//index
app.get('/fruits', (req, res) => {
    // res.send(fruits)
    res.render('index.ejs', {
        allFruits: fruits,
        title: 'index'
    })
})

//new
app.get('/fruits/new', (req, res) => {
    res.render('new.ejs')
})


//show
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // res.send(fruits[req.params.indexOfFruitsArray])
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray],
        title: 'show'
    })
})

app.post('/fruits', (req, res) => {
    console.log(req.body)

    if(req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    fruits.push(req.body)

    console.log(fruits)
    res.redirect('/fruits')
})




// <% if(fruit.readyToEat === true) { %>
//     "It is ready to eat"
// <% } else { %>
//     "It is not ready to eat"
// <%} %>


app.listen(3000, () => {
    console.log('listening')
})