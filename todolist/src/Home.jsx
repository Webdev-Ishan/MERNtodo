import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
    const [todos, settodos]= useState([]);

    useEffect(() => {
      axios.get('http://localhost:3000/get')
.then((res)=> settodos(res.data))
.catch((err)=> console.log(err))
    }, []);
    
    const deleteit=(id)=>{
      axios.delete('http://localhost:3000/delete/' + id )
      .then(()=> location.reload())
      .catch((err)=> console.log(err))

    }

  return (
    <div>
      <h1>To-Do List</h1>
      <Create/>
{

    todos.length=== 0 ?
    <div> <h2> NO Records </h2> </div>
    :
    
      todos.map(todo => (
     <div>

        {todo.Task}

        <i className="fas fa-trash" onClick={()=>deleteit(todo._id)}></i>

     </div>

      ))
    }
    </div>
  )
}

export default Home
