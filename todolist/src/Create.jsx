import React, { useState } from 'react'
import axios from 'axios'

function Create() {

  const [task, settask]= useState()

  const handlesubmit=()=>{
axios.post('http://localhost:3000/add',{task:task})
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

  }
  return (
    <div>
      <input type="text" onChange={(e)=> settask(e.target.value)}/>
      <button type='button' onClick={handlesubmit}>Add</button>
    </div>
  )
}

export default Create
