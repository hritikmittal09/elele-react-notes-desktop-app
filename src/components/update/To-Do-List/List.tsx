import React,{useCallback,useEffect,useState} from  'react'
import ListItem from './ListItem'
import { getTasks } from '@/externalApis/Api'

interface props {
  saveNewTask : boolean
}

const List : React.FC<props> =  ({saveNewTask})=>{
  const [TaskList,setTasksList] = useState([])
  
  useEffect(()=>{
    setTasksList(getTasks())
    //console.log(DeleteTask);
    

  },[saveNewTask,localStorage])


  const handleDeleteTask = (id: string) => {
    const updatedTasks = TaskList.filter((task: any) => task.id !== id);
    setTasksList(updatedTasks); // Update the state instantly
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); // Update localStorage
  };
  return (
    <div className='flex flex-col m-4'>
        {TaskList.map((task : any , i )=>{
          return <ListItem id = {task.id} TAskTitle= {task.taskName } TaskType= {task.taskType} key={task.id}  onDelete={handleDeleteTask} />
        })}
        
        
        
        
    </div>
  )
}

export default List