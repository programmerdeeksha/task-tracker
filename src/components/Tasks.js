import Task from './Task'
function Tasks({tasks,deleteTask}) {

    return (
        <>
            {
              tasks.map((task)=>(
                  <Task key={task.id} task={task} onDelete={deleteTask}/>
              ))  
            }
        </>
    )
}

export default Tasks






