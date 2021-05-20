
import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {

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
const deleteTask =(id) => {
   setTasks(tasks.filter((task)=>task.id!==id))
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      { tasks.length>0?<Tasks tasks={tasks} onDelete={deleteTask}/>:'No task to do'}
    </div>
  );
}

export default App;
