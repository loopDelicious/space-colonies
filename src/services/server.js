const express = require('express')
const app = express()
const port = process.env.PORT || 5500

app.get('/', (req, res) => { 

    res.send('Hello World!')

})

app.post('/', (req, res) => {

    res.send('Got a POST request')

})

app.put('/id', function (req, res) {

    res.send('Got a PUT request at /id')

})

app.delete('/id', function (req, res) {

    res.send('Got a DELETE request at /id')

})
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
