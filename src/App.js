import { useEffect, useState } from 'react';
import TaskCard from './components/TaskCard';
import './App.css';

function App() {
  const [tasksList, setTasksList] = useState([]) //tasks list state
  const [taskInput, setTaskInput] = useState('') //input handling state

  //update tasks list from localstorage if any
  useEffect(()=>{
    let localStorageTasks = JSON.parse(localStorage.getItem('tasks-list'))
    if(localStorageTasks){
      setTasksList(localStorageTasks)
    }
  },[])

  //update localstorage function
  const updateLocal = (arr) =>{
    localStorage.setItem('tasks-list',JSON.stringify(arr))
  }

  const handleAddTask = (event) => {
    event.preventDefault();
    if(taskInput){
      setTasksList([ taskInput,...tasksList])
      updateLocal([ taskInput,...tasksList])
      setTaskInput('')
    }
  }

  
  
  return (
    <div className="App container p-4">
      <h1 >ToDo List</h1>
      <p>All Your Tasks</p>
      <hr/>
      <form>
        <input className='form-control' placeholder='Enter Task' type='text' value={taskInput} onChange={(e)=>setTaskInput(e.target.value)}/>
        <button type='button' className='m-4 btn btn-outline-light' onClick={handleAddTask}>Add Task</button>
      </form>
      <div className='tasksList fs-5 fw-bold d-flex justify-content-evenly flex-wrap'>
        {
          tasksList.map((e,i)=>
            <TaskCard key={i} task={e} taskIndex={i} tasksList={tasksList} setTasksList = {setTasksList} updateLocal={updateLocal}/>
          )
        }
      </div>
    </div>
  );
}

export default App;
