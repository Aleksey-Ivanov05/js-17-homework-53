import React from "react";
interface AddProps {
  onAddTask: React.MouseEventHandler;
  onChangeTask: React.ChangeEventHandler<HTMLInputElement>;
}

const AddTaskForm: React.FC<AddProps> = (props) => {
  return(
    <div className="main-div">
      <input type="text" placeholder="Add new task" className="add-input" onChange={props.onChangeTask}/>
      <button type="button" className="add-btn" onClick={props.onAddTask}>Add</button>
    </div>
  )
}

export default AddTaskForm;