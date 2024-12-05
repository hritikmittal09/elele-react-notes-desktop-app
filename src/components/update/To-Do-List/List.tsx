import React,{useCallback,useEffect,useState} from  'react'
import ListItem from './ListItem'
import { getTasks } from '@/externalApis/Api'

interface props {
  saveNewTask : boolean
}

const List : React.FC<props> =  ({saveNewTask})=>{
  const [TaskList,setTasksList] = useState([])
  const [DeleteTask, deleteInProcess] = useState<boolean>(false)
  useEffect(()=>{
    setTasksList(getTasks())

  },[saveNewTask,DeleteTask])
  return (
    <div className='flex flex-col m-4'>
        {TaskList.map((task : any , i )=>{
          return <ListItem id = {task.id} TAskTitle= {task.taskName } TaskType= {task.taskType} key={i}/>
        })}
        
        
        
        
    </div>
  )
}

export default List