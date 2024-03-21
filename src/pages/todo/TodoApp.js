import React, { useState } from 'react'

const TodoApp = () => {
const localTodoes=["hello", "world"]

const [todo, setTodo]=useState("");
const [AllTodos, setAllTodos]=useState([...localTodoes,"kutta"])
const [completedTodos, SetCompletedTodos]=useState([])

const handleAddItem=(index)=>
{
  console.log(AllTodos[index])
  setAllTodos([...AllTodos,AllTodos[index]])
  SetCompletedTodos([...completedTodos,AllTodos[index]])
}

  return (
    <div className='flex items-center flex-col justify-center h-screen'>
      <div className="h-[350px] w-[300px] bg-red-200 rounded-lg p-5
      ">{AllTodos.map((item,index)=>{
        return(<>
        <div className="w-full bg-white mt-5 py-1 px-3 rounded-md cursor-pointer"
        onClick={()=>handleAddItem(index)}
        >{item}</div>
        </>)
      })}</div>
      <div className="h-[350px] w-[300px] mt-5 bg-blue-200 rounded-lg p-5">
      {completedTodos.map((item)=>{
        return(<>
        <div className="w-full bg-white mt-5 py-1 px-3 rounded-md cursor-pointer">{item}</div>
        </>)
      })}
      </div>
    </div>
  )
}

export default TodoApp