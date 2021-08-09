import React from "react";
import css from "../../index.css"

function Task({index, task, removeTask}){
    return  (
        <div id="todo-add" className="todo-add taskdiv">
            <p className="todo-item todo-row">{task.taskValue}</p>
            <button className="todo-ok todo-item" id="ok" onClick={() => removeTask(index)}>X</button>
        </div>
     )
}

// let myNoteStyle ={

// }

export default Task;