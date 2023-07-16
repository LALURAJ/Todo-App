import './App.css';
import { useState } from 'react';
import TaskItem from './components/task-item/TaskItem';
import TaskForm from './components/task-form/TaskForm';
function App() {
 
  const [taskList,setTaskList] = useState([{
    title:"A todo",
    description:"The description sample",
    isCompleted:false
  }]);

  return (
      <div className="App">
        <h1>ToDo List</h1>
        <TaskForm taskList={taskList} taskListHandler={setTaskList}/>
        <div className="task-list">
           {taskList.map((task,index)=><TaskItem task={task} taskList={taskList} taskListHandler={setTaskList} key={index}/>)}
        </div>
    </div>
  );
}

export default App;
