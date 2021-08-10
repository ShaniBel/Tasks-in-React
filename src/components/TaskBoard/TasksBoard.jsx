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

    taskDone = (index) => {
        console.log(index);
        let task = {...this.state.task}
        task.isDone = true;
        // this.setState({...task})
        // console.log(this.state.task);

        let tasksArrTemp = [...this.state.tasksArr];
        tasksArrTemp.splice(index,1, task)
        console.log(tasksArrTemp);
        this.setState({tasksArr : tasksArrTemp})

        localStorage.setItem("tasks", JSON.stringify(tasksArrTemp))

    }

    deleteComleted = () => {
        let tasksArrTemp = [...this.state.tasksArr];
        for (let index = 0; index < tasksArrTemp.length; index++) { 
            if(tasksArrTemp[index].isDone) {
                tasksArrTemp.splice(index, 1)
                localStorage.setItem("tasks", JSON.stringify(tasksArrTemp))
                this.setState({tasksArr : tasksArrTemp})
            }
        }
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
                    <input type="button" onClick={this.deleteComleted} value="Delete Completed" id="todo-delcom" />
                </div> 
                
                <div id="todo-list">
                    {this.state.tasksArr.map((task, index)=>{
                       return  <Task key={index} index={index} task={task} taskDone={this.taskDone} />
                    })}
                </div>
            </div>
        )

    }
}

export default NotesBoard;