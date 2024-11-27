import React, { useState } from 'react'
import { IoAdd } from 'react-icons/io5'

function AddToDo() {
 
 const [addTaskInut,setAddTaskInput] =useState("")

  const handlechange =(e:any)=>{
    setAddTaskInput(e.target.value)
    
  }
  const AddTask = ()=>{
    console.log(addTaskInut);
    
  }
  return (
    <div>
         <div className='flex flex-col  justify-end  '>
         <div className='flex gap-3'>
         <input type="text" placeholder="ádd New Task" className="input w-full max-w-xs mr-4" onChange={handlechange}/>
         <button className="btn btn-active  w-28  " onClick={AddTask}>Add Task <IoAdd className=' text-white ' /> </button>
         </div>
         <div  className='flex justify-start '>
         <select className="select select-bordered  my-2 w-50 max-w-xs ">
        <option  selected>One time Task</option>
        <option>Daily Task</option>
        <option>Reminder </option>
      </select>
      </div>
         

        
        
         
     

      </div>
    </div>
  )
}

export default AddToDo