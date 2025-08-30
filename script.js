document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = taskValue;

  // Mark as completed on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.style.background = '#dc3545';
  deleteBtn.style.color = 'white';
  deleteBtn.style.border = 'none';
  deleteBtn.style.padding = '5px 10px';
  deleteBtn.style.borderRadius = '5px';

  deleteBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);
  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}