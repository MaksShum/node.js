
const express = require('express')

const app = express()

app.get('/',(req,res) => res.send('Response express'))

app.listen(5000,() => console.log('Server was started'))