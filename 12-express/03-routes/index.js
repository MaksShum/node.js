const express = require('express')

const app = express()

const getRootHandler = (req,res) => {
    res.send('Response express routes');

}
const getCommentsHandler = (req,res) => {
    res.send('Get comments route')
}
const postComments = (req,res) => {
    res.send('Post comments')
}

app.get('/',getRootHandler)
app.get('/comments',getCommentsHandler)
app.post('/comments',postComments)

app.listen(5000,() => console.log('Server was start'))