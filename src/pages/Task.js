import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Task = () => {


    const [activity, setActivity] = useState("");
    const [listdata, setListdata] = useState([]);

  function addActivity() {
        const updatedList = [...listdata, activity];
        setListdata(updatedList);
        setActivity('');
    }
                    
    function removeActivity(i) {
        const updatedList = listdata.filter((elem, id) => id !== i);
        setListdata(updatedList);
    }

    function removeall() {
        setListdata([]);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            addActivity();
        }
    }

    function moveItemToOtherContainer(i) {
        const updatedList = listdata.filter((elem, id) => id !== i);
        const itemToMove = listdata[i];
        const targetContainer = document.querySelector('.target-container');
        const newItem = document.createElement('div');
        newItem.textContent = itemToMove;
        newItem.className = 'w-30rem h-30rem bg-teal-600 rounded-lg border-4';
        targetContainer.appendChild(newItem);
        setListdata(updatedList);
    }



    return (
        <>
            <div className="bg-cyan-400 h-screen">
                <h2 className="text-5xl font-mono text-center text-orange-600">Today task</h2>
                <div className="flex justify-evenly items-center mt-10">
                    <div className="h-[30rem] w-[30rem] rounded-lg border-4 border-yellow-400 bg-teal-00">
                        <div className="text-white text-4xl">Todo List </div>
                        <hr />
                        <div className="mt-8">
                            <input
                                className="rounded w-[250px] text-center"
                                type="text"
                                placeholder="Add text"
                                value={activity}
                                onChange={(e) => setActivity(e.target.value)}
                              onKeyPress={handleKeyPress}
                            />
                            <button className="ml-2 bg-blue-500 rounded pr-3 pl-3" onClick={addActivity}>Add</button>
                            {listdata.length > 0 && listdata.map((data, i) => (
                                <p key={i} className="flex">
                                    <div
                                        className="w-[50%] text-orange-500 font-mono text-center text-xl bg-cyan-800 rounded pl-[10px] border-4 border-slate-300 mt-4 ml-20"
                                        onClick={() => moveItemToOtherContainer(i)} // Move item on click
                                    >
                                        {data}
                                    </div>
                                    <button className="ml-[40px]" onClick={() => removeActivity(i)}>
                                        <i className="fa-solid fa-trash absolute mt-5 text-white"></i>
                                    </button>
                                </p>
                            ))}
                            {listdata.length >= 1 && (
                                <button className="bg-red-800 rounded-lg p-3 mt-5" onClick={removeall}>Remove all</button>
                            )}
                        </div>
                    </div>
                    <div className="h-[30rem] w-[30rem] rounded-lg border-4 bg-teal-600 target-container">
                   
				   
                    </div>
                </div>
            </div>
        </>
    );
}

export default Task;


