import { useState } from 'react'
import { useEffect } from 'react'
import { IoAdd } from "react-icons/io5";

import './App.css'
import { getTodayQuote } from './externalApis/Api'

function App() {
  const [TodaysQoute ,setTodaysqute] = useState("")
  const fetchQutes = async ()=>{
    const quote = await getTodayQuote();
    setTodaysqute(quote)
    
    
  }
    
  useEffect(()=>{
    
    fetchQutes()

  },[])
  

  
  
  return (
    <div className=' bg-black w-full h-full flex  flex-col'>
      
     
      <h2 > Thought of day</h2>
      <h3 className=' text-white  font-thin text-sm '>`{TodaysQoute}` </h3>
      <h1 className=' text-white font-bold ' > To Do list</h1>
      <div className='flex  justify-end  items-end'>
      <button className="btn btn-active  w-28 justify-center ">Add Task <IoAdd className=' text-white ' /> </button>

      </div>
      
      
      

      
    </div>
  )
}

export default App