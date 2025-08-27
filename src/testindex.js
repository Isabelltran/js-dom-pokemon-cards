const data = [
  {
    id: 1,
    title: "Do something",
    isDone: false,
  },
  {
    id: 2,
    title: "Do something else",
    isDone: false,
  },
  {
    id: 3,
    title: "Did the thing",
    isDone: true,
  },
];

// Select items
const taskListUL = document.querySelector("#task-list")
const newTaskButton = document.querySelector("#new-task-button")
const newTaskText = document.querySelector("#new-task-text")

// Update data and render the data 

function createTask(title) {
    if (title.length === 0) {
        return
    }
    const newTask = {
        id: data.length + 1,
        title: title,
        isDone: false
    }
    data.push(newTask)
    renderTasks()
}

function handleTaskClicked(task) {
    task.isDone = !task.isDone;
    renderTasks()
}

function registerButtonClicked() {
    newTaskButton.addEventListener('click', () => {
        const newTaskTitle = newTaskText.value
        createTask(newTaskTitle)
        newTaskText.value = ""
    })
}

// Build the interface

function createTaskCheckBox(task) {
    const checkBox = document.createElement("input")
    checkBox.setAttribute('type', 'checkbox')
    checkBox.checked = task.isDone
    checkBox.addEventListener('click', () => {handleTaskClicked(task)})
    return checkBox
}


// Render all of the tasks to the page
function renderTasks() {
    console.log("In renderTasks")
    console.log(data)
    taskListUL.innerHTML = ""

    // Loop through the data and build the list item for it, and append it to the task list
    for (let i = 0; i < data.length; i++) {
        const task = data[i]
        const taskLi = document.createElement('li')
        taskLi.setAttribute('id', task.id)
        taskLi.innerText = task.title
        taskLi.appendChild(createTaskCheckBox(task))
        taskListUL.appendChild(taskLi)

    }
}

// Call the initial render
function main() {
    renderTasks()
    registerButtonClicked()
}

main()