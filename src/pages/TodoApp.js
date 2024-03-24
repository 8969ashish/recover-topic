import React, { useState } from 'react';

const TodoApp = () => {
  const localTodoes = ["hello", "world" ,6, 4.5,'YO','YO'];

   
  const [AllTodos, setAllTodos] = useState([...localTodoes]);
  const [completedTodos, SetCompletedTodos] = useState([]);

  const handleAddItem = (index) => {
    const clickedTodo = AllTodos[index];
  
    if (!completedTodos.includes(clickedTodo)) {
      setAllTodos([...AllTodos]);
      SetCompletedTodos([...completedTodos, clickedTodo]);
    }
  };

  const handleRemoveData = (i) => {
    const newList = completedTodos.filter((ele, id) => id !== i);
    SetCompletedTodos(newList);
  };

  return (
    <div className='flex items-center flex-col justify-center h-screen'>
      <div className="h-[350px] w-[300px] bg-red-200 rounded-lg p-5">{AllTodos.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full bg-white mt-5 py-1 px-3 rounded-md cursor-pointer"
            onClick={() => handleAddItem(index)}
          >
            {item}
          </div>
        );
      })}</div>
      <div className="h-[350px] w-[300px] mt-5 bg-blue-200 rounded-lg p-5">{completedTodos.map((item, index) => {
        return (
          <div key={index} className="w-full bg-white mt-5 py-1 px-3 rounded-md cursor-pointer" onClick={() => handleRemoveData(index)}>
            {item}
          </div>
        );
      })}</div>
    </div>
  );
};

export default TodoApp;
