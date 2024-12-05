import React, { useState } from 'react'
import List from './List'
import { IoAdd } from 'react-icons/io5'

const AddToDo:React.FC=()=> {
 const [SaveTask, saveTaskCompete] = useState<boolean>(false)
 const [addTaskInut,setAddTaskInput] =useState("")
 const [selectedTask, setSelectedTask] = useState("Daily Task");

  const handlechange =(e:any)=>{
    setAddTaskInput(e.target.value)
    
  }
  const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTask(event.target.value); 
  };
  function generateRandomId() {
    return Math.random().toString(36).substr(2, 9); // Example: "83f9gq7c1"
}
  const AddTask = ()=>{
    saveTaskCompete(false)
   // console.log(addTaskInut);
    //console.log(selectedTask);
    let data: string = localStorage.getItem("tasks") || "[]";
    let tasks = JSON.parse(data);

    // Create a new task object
    const newTask = {
        id: generateRandomId(),
        taskName: addTaskInut,
        taskType: selectedTask,
    };

    // Append the new task to the list
    tasks.push(newTask);

    // Save the updated list back to localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    //console.log(localStorage.getItem("tasks"));
    saveTaskCompete(true)
    

    
    
    
  }
  return (
    <div>
         <div className='flex flex-col  justify-end  '>
         <div className='flex gap-3'>
         <input type="text" placeholder="ádd New Task" className="input w-full max-w-xs mr-4  border-gray-500 focus:border-gray-500" onChange={handlechange}/>
         <button className="btn btn-active  w-28  " onClick={AddTask}>Add Task <IoAdd className=' text-white ' /> </button>
         </div>
         <div  className='flex justify-start '>
        <select  className="select select-bordered  my-2 w-50 max-w-xs "
        value={selectedTask} // Bind the state to the select value
        onChange={handleChange}
        >
         
        <option  defaultValue={1}>One time Task</option>
        <option>Daily Task</option>
        <option>Reminder </option>
      </select>
      </div>
        <div className=' m-3'>
        <List saveNewTask = {SaveTask} />

        </div>
        

        
        
         
     

      </div>
    </div>
  )
}

export default AddToDo