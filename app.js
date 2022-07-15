const express = require('express');
const auth = require('./route/auth')
const app = express()
app.use(express.json())
app.use('/auth',auth)
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('this is express sercer')
})

app.listen(5002, ()=>{
    console.log("applicaton is running")
})





