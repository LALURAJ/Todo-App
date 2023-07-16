import { useState } from 'react';
import "./TaskForm.css";

export default function TaskForm({taskList,taskListHandler}){
    const [task,setTask] = useState({
        title:"",
        description:"",
        isCompleted:false
    });

    const onChangeHandler = (event)=>{
        console.log(event.target.name," : ",event.target.value);
        setTask({
            ...task,
            [event.target.name]:event.target.value
        })
    }

    const addTaskHandler = (event)=>{
        event.preventDefault();
        if(task.title && task.description){
            taskListHandler([...taskList,task]);
            setTask({
                title:"",
                description:"",
                isCompleted:false
            })
        }
      
    }

    return(
        <form className="task-details">
            <input type = "text" placeholder="The Title" name = "title" value={task.title} onChange={onChangeHandler}/>
            <textarea placeholder="The Description" name="description" value={task.description} onChange={onChangeHandler}/>
            <button onClick={addTaskHandler}>Add Task</button>
        </form>
    )
}