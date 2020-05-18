let taskList = []

class Task {
    constructor(taskId, name, dueDate, isDone) {
        this.taskId = taskId;
        this.name = name;
        this.dueDate = dueDate;
        this.isDone = isDone;
    }

    toString() {
        let htmlText = '<li class="task" ><div>'
        htmlText += '<div id = '+this.name+'>'+this.name+'</div>'
        htmlText += this.dueDate
        htmlText += "  " + '<button onclick="deleteTask(';
        htmlText += this.taskId;
        htmlText += ')">Delete</button>';
        htmlText += '<input type="checkbox" id = '+this.taskId+' onchange="markTask('+this.taskId+')">'
        htmlText += '</div></li>';
        return htmlText;
    }
}

function render() {
    const listUI = document.getElementById("todolist")
    listUI.innerHTML = "";
    if (taskList.length === 0) listUI.innerHTML = "No tasks todo"
    taskList.forEach((task) => {
        listUI.innerHTML += task.toString();
        if (task.isDone === true) {
            document.getElementById(task.name).innerHTML = '<s>'+task.name+'</s>'
        }
    })
}

function deleteTask(taskId) {
    taskList = taskList.filter(
        (t) => {
            if(t.taskId != taskId) 
            return t;
        }
    );
    render()
}

function createTask() {
    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("myDate").value
    addTask(new Task(Date.now(), taskName, dueDate, false));
}

function addTask(t) {
    taskList.push(t)
    render();
}

function markTask(taskId) {
    taskList.forEach((task) => {
        if (task.taskId === taskId) {
            task.isDone = true;
            document.getElementById(task.name).innerHTML = '<s>'+task.name+'</s>'
        }
    })
}

function init() {
    console.log("init called");
}

init();