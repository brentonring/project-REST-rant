const express = require('express')
// initialize app variable
const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

// keep server open
app.listen(3000)