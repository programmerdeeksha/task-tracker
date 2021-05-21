
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask'
function App() {

  const [showAddTask, setShowAddTask]= useState(false)

  const [tasks, setTasks]= useState(
    [
        {
            id:1,
            text:'Do leetcode',
            day:'14 May',
            reminder: true,
        },
        {
            id:2,
            text:'Do Codeforces',
            day:'15 May',
            reminder: true,
        },
        {
            id:3,
            text:'Its my birthday',
            day:'16 May',
            reminder: true,
        },
    ]
)

const addTask=(task) => {
   const id= Math.floor(Math.random()*1000)+1;
   const newTask= {id, ...task}
   setTasks([...tasks,newTask])
}

const deleteTask =(id) => {
   setTasks(tasks.filter((task)=>task.id!==id))
}


const toggleReminder=(id) => {
 setTasks(
   tasks.map((task)=>
   task.id===id?{
     ...task,reminder:!task.reminder
   }:task
   )
 )
}
const setAddTask=()=>{
   setShowAddTask(true);
}
const unsetTaskAdd=()=>{
  setShowAddTask(false);
}
  return (
    <div className="container">
      <Header title="Task Tracker" onclick={setAddTask}/>
      {showAddTask&&<AddTask onAdd={addTask} onclick={unsetTaskAdd} />}
      { tasks.length>0?<Tasks 
       tasks={tasks}
       onDelete={deleteTask} 
       onToggle={toggleReminder}/>:'No task to do'}
    </div>
  );
}

export default App;
