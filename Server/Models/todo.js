const mongoose= require('mongoose')



const todoSchema= new mongoose.Schema({

    Task:String
})

module.exports= mongoose.model('Todo', todoSchema)