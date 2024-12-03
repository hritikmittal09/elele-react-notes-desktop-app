import React,{useCallback,useEffect,useState} from  'react'
import ListItem from './ListItem'
import { getTasks } from '@/externalApis/Api'

function List (){
  const [TaskList,setTasksList] = useState([])
  useEffect(()=>{
    setTasksList(getTasks())

  },[])
  return (
    <div className='flex flex-col m-4'>
        {TaskList.map((task : any , i )=>{
          return <ListItem id = {task.id} TAskTitle= {task.taskName } TaskType= {task.taskType} key={i}/>
        })}
        
        
        
        
    </div>
  )
}

export default List