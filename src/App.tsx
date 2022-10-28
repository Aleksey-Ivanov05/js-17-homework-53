import React, {useState} from 'react';
import './App.css';
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import Task from "./Task/Task";

function App() {
  const [tasks, setTasks] = useState([
    {message: 'Buy milk', id: String(Math.floor(Math.random()*1000000))},
    {message: 'Walk with dog', id: String(Math.floor(Math.random()*1000000))},
    {message: 'Do homework', id: String(Math.floor(Math.random()*1000000))}
  ]);

  const [currentTask, setCurrentTask] = useState({message: ''});

  const changeTask = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTaskCopy = currentTask;
    currentTaskCopy.message = event.target.value;
    setCurrentTask(currentTaskCopy);
  };

  const addTask = () => {
    const tasksCopy = [...tasks];
    const newTask = {
      message: currentTask.message,
      id: String(Math.floor(Math.random()*1000000))
    }
    tasksCopy.push(newTask);
    setTasks(tasksCopy);
  }

  const deleteTask = (id: string) => {
    const index = tasks.findIndex(p => p.id === id);
    const tasksCopy = [...tasks];
    tasksCopy.splice(index, 1);
    setTasks(tasksCopy);
  }

  let tasksList: React.ReactNode = null;
  if (tasks) {
    tasksList = tasks.map((task, index) => {
     return<Task key={task.id} message={task.message} delete={() => deleteTask(tasks[index].id)}/>
    })
  }

  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i].id);
  }

  return (
    <div>
      <header className="container">
        <AddTaskForm onAddTask={addTask} onChangeTask={changeTask}/>
      </header>
      <div className="container" id="container">
        {tasksList}
      </div>
    </div>

  );
}

export default App;
