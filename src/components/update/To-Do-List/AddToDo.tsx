import React from 'react'
import { IoAdd } from 'react-icons/io5'

function AddToDo() {
  return (
    <div>
         <div className='flex  justify-end  items-end'>
         <input type="text" placeholder="Type here" className="input w-full max-w-xs mr-4" />
      <button className="btn btn-active  w-28 justify-center ">Add Task <IoAdd className=' text-white ' /> </button>

      </div>
    </div>
  )
}

export default AddToDo