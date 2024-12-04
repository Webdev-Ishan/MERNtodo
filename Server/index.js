const express= require('express')
const mongoose= require('mongoose')
const cors= require('cors')
const todoModel= require('./Models/todo')

const app= express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


mongoose.connect('mongodb://localhost:27017/Todo')


app.get('/get', (req, res)=>{

todoModel.find()
.then(result=>res.json(result))
.catch(err=>res.json(err))

})

app.delete('/delete/:id', (req, res)=>{

    const {id}= req.params;
    todoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
.catch(err=>res.json(err))
    })


app.post('/add',(req,res)=>{
    const task= req.body.task;
    
todoModel.create({

    Task:task

})
.then((result)=>res.json(result))
.catch((err)=>res.json(err))
})

app.listen(3000, ()=>{
    console.log('Working fine');
})