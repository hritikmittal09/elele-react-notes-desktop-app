import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
interface props {
  id : string,
  TAskTitle : string,
  TaskType : string
}


function deleteTask(id : string) {
  // Retrieve the current list of tasks from localStorage
  let data = localStorage.getItem("tasks") || "[]";
  let tasks = JSON.parse(data);

  // Filter out the task with the matching id
  const updatedTasks = tasks.filter((task : any)=> task.id !== id);

  // Save the updated list back to localStorage
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));

  console.log(`Task with id ${id} has been deleted.`);
}


const ListItem :React.FC <props>= ({id,TAskTitle,TaskType})=> {
  return (
    <div className=' flex bg-black  border-white justify-around p-3  rounded-md m-2' >
        <div>
        <span className='  text-white font-bold my-3 text-lg'>{TAskTitle}</span><br />
        <span className=' text-sm text-gray-400' > {TaskType}</span>
        </div>
       
        <div>
        <button className="btn btn-active  w-28  "> <RiDeleteBin5Line className=' text-white text-lg' /> </button>
        </div>

    </div>
  )
}

export default ListItem