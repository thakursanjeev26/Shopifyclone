// import express mongoose cors
// create connection
// create app 
// use cors
// get function
//  listen it on 3000 port 
const express=require('express')
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/products")

const App = express()

const Product=mongoose.model('product',new mongoose.Schema({
    id:Number,
    Name:String

}))

App.get('/products',(req,res)=>
    Product.find().then(data=>res.json(data))
)

App.post('/products',(req,res)=>
    Product.create(req.body).then(()=>console.log("created"))
)

App.delete('/products/:id',(req,res)=>
Product.findByIdAndDelete(req.params.id,req.body).then(()=>console.log("Deleted"))
)

App.put('/products/:id',(req,res)=>
    Product.findByIdAndUpdate(req.params.id,req.body, {new:True}).then(()=>console.log("Deleted"))
    )
    

App.listen(3000,()=>console.log("Connected to port 3000"))