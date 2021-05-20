import { FaTimes} from 'react-icons/fa'

function Task({task,deleteTask}) {
    return (
        <div className="task">
            <h3>{task.text} <FaTimes style={{color:'red',cursor:'pointer'}} onClick={deleteTask}/></h3>
            <p>{task.day}</p>

        </div>
    )
}

export default Task
