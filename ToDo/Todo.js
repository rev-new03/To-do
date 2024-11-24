document.getElementById('add-task').addEventListener('click', function(){
const taskInput = document.getElementById('task-input');
const taskText = taskInput.value;

if(taskText.trim() === '') return;

const li = document.createElement('li');
li.textContent = taskText;

li.addEventListener('click',function(){
    li.classList.toggle('done');
});

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.addEventListener('click',function(){
    li.remove();
});

li.appendChild(removeButton);
Document.getElementById('task-list').appendChild(li);
taskInput.value = '';

document.getElementById('clear-task').addEventListener('click',function(){
    document.querySelectorAll('#task-list li.clear');
    tasks.forEach(task =>task.remove());
});
});