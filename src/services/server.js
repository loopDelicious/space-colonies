const express = require('express')
const bodyParser = require("body-parser")
const { validLetter, validNumber, validImage } = require('./validate.js')
const app = express()
const port = process.env.PORT || 5500
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const redis = require("redis");
const client = redis.createClient();
client.on("error", function(error) {
  console.error(error);
});

// retrieve status of tile, requires board coordinates
app.get('/', (req, res) => { 

    const letter = req.query.letter.toUpperCase()
    const number = req.query.number
    
    if ( !(validLetter(letter)) || !(validNumber(number)) ) {
        res.json({
            "message": "Valid coordinates required."
        })
    } else {
        client.get(`letter:${letter}:number:${number}`, (err, reply) => {
            console.error(err)
            res.json({
                "tile": `${letter}:${number}`,
                "message": reply ? reply.toString() : "empty"
            })
        })
    }

})

// add new status for tile, requires board coordinates and image name
app.post('/', (req, res) => {
 
    const imageName = req.body.imageName.toLowerCase()
    const letter = req.body.letter.toUpperCase()
    const number = req.body.number

    if (!validImage(imageName)) { 
        res.json({"message": "Valid image name required"})
    } else if (!validLetter(letter)) {
        res.json({"message": "Valid letter required"})
    } else if (!validNumber(number)) {
        res.json({"message": "Valid number required"})
    } else {
        client.set(`letter:${letter}:number:${number}`, imageName, (err, reply) => {
            console.error(err)
            res.json({
                "tile": `${letter}:${number}`,
                "message": reply ? reply.toString() : "empty",
                "status": `Add ${imageName}`
            })
        })
    }

})

// will do the same thing as POST
app.put('/', function (req, res) {

    const imageName = req.body.imageName.toLowerCase()
    const letter = req.body.letter.toUpperCase()
    const number = req.body.number

    if (!validImage(imageName)) { 
        res.json({"message": "Valid image name required"})
    } else if (!validLetter(letter)) {
        res.json({"message": "Valid letter required"})
    } else if (!validNumber(number)) {
        res.json({"message": "Valid number required"})
    } else {
        client.set(`letter:${letter}:number:${number}`, imageName, (err, reply) => {
            console.error(err)
            res.json({
                "tile": `${letter}:${number}`,
                "message": reply ? reply.toString() : "empty",
                "status": `Update ${imageName}`
            })
        })
    }

})

// delete status of tile, requires board coordinates
app.delete('/', function (req, res) {

    const letter = req.body.letter.toUpperCase()
    const number = req.body.number

    if ( !(validLetter(letter)) || !(validNumber(number)) ) {
        res.json({
            "message": "Valid coordinates required."
        })
    } else {
        client.del(`letter:${letter}:number:${number}`, function(err, reply) {
            console.error(err)
            if (reply == 1) { 
                res.json({"message": "Deleted"}) 
            } else {
                res.json({"message": "Unable to delete"}) 
            }
         })
    }

})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
