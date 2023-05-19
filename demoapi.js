const express = require('express')
const cors = require('cors')
const app = express()

const data = []
app.use(cors())
app.use(express.json())
app.get('/', (req,res)=>{
    res.json(data)
})

app.post('/', (req,res)=>{
    req.body["id"]=data.length
    data.push(req.body);
    res.json(data)
})
app.patch('/', (req,res)=>{
    const id = +req.body.id
    data[id].name = req.body.name;
    res.json(data)
})

app.listen(4000,()=>{
    console.log("http://localhost:4000/")
})