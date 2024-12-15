import React, { useState } from 'react'

export default function Todolist(){
    
const [task,setTask] = useState(["Go Gym", "Check Business Email", "Prepare For Meeting"]);
const [newtask, setNewtask]= useState("");

function handleInput(e){
  setNewtask(e.target.value)
}

function addtask(){
  setTask(t=>[...t,newtask]);
  setNewtask("")
}

function deletetask(index){

      const updateTasks = task.filter((_, i) => i !== index);
      setTask(updateTasks);

}



  return (
    <div className='to-do-list'>
        <h1>To-Do-List</h1>
        <input type='text'placeholder='Enter a task' value={newtask} onChange={handleInput} />

        <button className='add-button' onClick={addtask}>Add</button>

        <ol>    
          {task.map((tasks, index)=>
              <li key={index}>
                <span className='text'>{tasks}</span>
                <button className='delete-button' onClick={()=>deletetask(index )}>Delete</button>
                
                <input className='mark-button' type="checkbox" />
              </li>
        )}
        </ol>

    </div>
  )
}
