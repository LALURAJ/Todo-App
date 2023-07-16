import { FaTrashAlt } from "react-icons/fa";
import "./TaskItem.css";

export default function TaskItem({task,taskList,taskListHandler}){
    const checkBoxHandler = (event)=>{
       const tasks =  taskList.map((t)=>{
            if(t.title === task.title && t.description === task.description){
                return {
                    title:task.title,
                    description:task.description,
                    isCompleted:event.target.checked
                }
            }
            else
                return task;
        })
        taskListHandler(tasks);
    }
    
    const taskDeleteHandler = (event)=>{
       const filteredTasks =  taskList.filter((t)=>t.title!=task.title && t.description!=task.description);
       taskListHandler(filteredTasks);
    }
    return(
        <div className="task-item">
            <div className={"task-info "+(task.isCompleted?"task-completed":"")}>
                <span>{task.title}</span>
                <span>{task.description}</span>
            </div>
            <div className="task-menu">
                <input type="checkbox" checked={task.isCompleted} onChange={checkBoxHandler}/>
                <button className="delete-btn" onClick={taskDeleteHandler}><FaTrashAlt/></button>
            </div>
        </div>
    )
}