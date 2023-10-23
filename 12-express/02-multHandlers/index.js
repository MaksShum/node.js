
const express = require('express')

const app = express()

const firstHend = (req,res,next) => {
    console.log('first');
    next()
}
const secondHend = (req,res) => {res.send('Response express');
console.log('Second');} 

app.get('/',firstHend,secondHend)

app.listen(5000,() => console.log('Server was start'))