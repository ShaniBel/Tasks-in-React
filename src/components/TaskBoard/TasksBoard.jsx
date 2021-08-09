import React from "react";
import Task from "../Task/Task"
import css from "../../index.css"


class NotesBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasksArr: JSON.parse(localStorage.getItem("tasks")) || [],
            task: {
                taskValue: "",
                isDone: false
            }
            
        }
    }

    handelInput = (e) => {
        let value = e.target.value;
        let task = this.state.task;
        task.taskValue = value;
        this.setState({...task});
    }

    addTask = (e) => {
        e.preventDefault();
        let tasksArrTemp = [...this.state.tasksArr];
        console.log(this.state.task);
        tasksArrTemp.push({...this.state.task});
        console.log(tasksArrTemp);
        localStorage.setItem("tasks", JSON.stringify(tasksArrTemp))

        this.setState({tasksArr : tasksArrTemp})
        console.log(this.state.tasksArr);
    }

    removeTask = (index) => {
        let tasksArrTemp = [...this.state.tasksArr];
        tasksArrTemp.splice(index, 1)
        localStorage.setItem("tasks", JSON.stringify(tasksArrTemp))
        this.setState({tasksArr : tasksArrTemp})
    }

    render() {
        return (
            <div id="todo-wrap">
        
                <h1>MY TASKS LIST</h1>
        
                <form id="todo-add">
                    <input type="text" onInput={this.handelInput} id="todo-item" required />
                    <input type="submit" onClick={this.addTask} id="todo-save" value="&#10010;" />
                </form>
        
                <div id="todo-del">
                    <input type="button" value="Delete All" id="todo-delall" />
                    <input type="button" value="Delete Completed" id="todo-delcom" />
                </div> 
                
                <div id="todo-list">
                    {this.state.tasksArr.map((task, index)=>{
                       return  <Task key={index} index={index} task={task} removeTask={this.removeTask} />
                    })}
                </div>
            </div>
        )

    }
}

export default NotesBoard;