const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `${taskText}<button class="completeBtn">Complete</button><button class="deleteBtn">Delete</button>`;
        pendingTasksList.appendChild(li);
        newTaskInput.value = '';
        addTaskEventListeners(li);
    }
}

function addTaskEventListeners(task) {
    const completeBtn = task.querySelector('.completeBtn');
    const deleteBtn = task.querySelector('.deleteBtn');

    completeBtn.addEventListener('click', function() {
        task.classList.toggle('completed');
        if (task.classList.contains('completed')) {
            completedTasksList.appendChild(task);
        } else {
            pendingTasksList.appendChild(task);
        }
    });

    deleteBtn.addEventListener('click', function() {
        task.remove();
    });
}

document.getElementById('newTask').addEventListener('keydown', function(e) {
    if (e.keyCode === 13) {
        addTask();
    }
});

// Add sample initial tasks for demonstration purposes
addTaskEventListeners(pendingTasksList.children[0]);
addTaskEventListeners(pendingTasksList.children[1]);
