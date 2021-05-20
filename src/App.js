
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
   console.log('delete',id);
}

  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
