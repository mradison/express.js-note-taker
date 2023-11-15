const router = require('express').Router()
const path = require('path')
const fs = require('fs').promises;
const { isUtf8 } = require('buffer');

app.get('/api/notes', (req,res) => {

    fs.readFile('db/db.json', 'utf8') .then(data => {
        res.json(data);
    })


    // call a function that I write outside of this to get the notes from the db.json file
   
})
app.post('/api/notes', (req,res) => {
    // recieve the data

    req.body

    fs.writeFile(`./db/${newReview.product}.json`, reviewString, (err) =>
    err
      ? console.error(err)
      :
    //call a function that will write the user's notes inside a db.json file
    res.json('Note was added')
    )
})

module.exports = router