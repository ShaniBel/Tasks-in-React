import React from "react";
import css from "../../index.css"

function Task({index, task, taskDone}){
    return  (
        <div id="todo-add" className="todo-add taskdiv">
            <p className="todo-item todo-row" id={task.isDone ? "done" : ""}>{task.taskValue}</p>
            <button className="todo-ok todo-item" id="ok" onClick={() => taskDone(index)}>X</button>
        </div>
     )
}

// let myNoteStyle ={

// }

export default Task;