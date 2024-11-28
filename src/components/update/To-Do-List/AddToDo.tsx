import React, { useState } from 'react'
import { IoAdd } from 'react-icons/io5'

const AddToDo:React.FC=()=> {
 
 const [addTaskInut,setAddTaskInput] =useState("")
 const [selectedTask, setSelectedTask] = useState("Daily Task");

  const handlechange =(e:any)=>{
    setAddTaskInput(e.target.value)
    
  }
  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(event.target.value); 
  };
  const AddTask = ()=>{
    console.log(addTaskInut);
    console.log(selectedTask);
    
    
  }
  return (
    <div>
         <div className='flex flex-col  justify-end  '>
         <div className='flex gap-3'>
         <input type="text" placeholder="ádd New Task" className="input w-full max-w-xs mr-4  border-gray-500 focus:border-gray-500" onChange={handlechange}/>
         <button className="btn btn-active  w-28  " onClick={AddTask}>Add Task <IoAdd className=' text-white ' /> </button>
         </div>
         <div  className='flex justify-start '>
        <select className="select select-bordered  my-2 w-50 max-w-xs "
        value={selectedTask} // Bind the state to the select value
        onChange={handleChange}
        >
         
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