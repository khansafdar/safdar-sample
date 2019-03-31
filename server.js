const express=require('express')
const app=express()
const PORT = process.env.PORT || 4444
app.get('/',(req,res)=>{
    res.send("hello safdar khan")
})
app.get('/hi',(req,res)=>{
    res.send('hello' + req.query.name)
})
app.listen('/safdar',(req,res)=>{
    res.send("this is updated version of the project ")
})
app.listen(PORT,()=>{
    console.log('server satrted' + PORT)
})