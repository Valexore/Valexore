document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const addTaskForm = document.getElementById('add-task-form');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${task.employee}</td>
                <td>${task.task}</td>
                <td>${task.dueDate}</td>
                <td><span class="status ${task.status}">${task.status}</span></td>
            `;
            taskList.appendChild(row);
        });
    }

    renderTasks();

    addTaskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const employee = document.getElementById('employee').value;
        const task = document.getElementById('task').value;
        const dueDate = document.getElementById('dueDate').value;
        const status = document.getElementById('status').value;

        tasks.push({ employee, task, dueDate, status });
        localStorage.setItem('tasks', JSON.stringify(tasks));

        renderTasks();
        addTaskForm.reset();
    });
});