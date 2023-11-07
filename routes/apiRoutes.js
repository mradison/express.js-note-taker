const router = require('express').Router()
const path = require('path')

app.get('/api/notes', (req,res) => {
    // call a function that I write outside of this to get the notes from the db.json file
    res.json()
})
app.post('/api/notes', (req,res) => {
    // recieve the data

    req.body

    //call a function that will write the user's notes inside a db.json file
    res.json('Note was added')
})

module.exports = router