const tasks = [];

function Task (details,date) {
    //figure out how to save state across multiple instances 
   
    return {
        details,
        date,
    }
}

function newTask (text) {
    const task = Task(text);
    tasks.push(task)
    return task
}

export{ 
    newTask,
    tasks,

}
