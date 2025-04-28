// Fungsi project lama
function tampilAlert2() {
  alert("Javascript Eksternal!");
}

// Fungsi To-Do List
let todos = [];
let editIndex = -1;

document.addEventListener('DOMContentLoaded', function() {
const form = document.getElementById('todo-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('todo-name').value;
    const date = document.getElementById('todo-date').value;

    if (editIndex === -1) {
      // Tambah data baru
      todos.push({ name, date, done: false });
    } else {
      // Update data yang diedit
      todos[editIndex] = { name, date, done: todos[editIndex].done };
      editIndex = -1;
    }

    this.reset();
    renderTable();
  });
}
});

function renderTable() {
const tableBody = document.getElementById('todo-table-body');
if (!tableBody) return;

tableBody.innerHTML = '';

todos.forEach((todo, index) => {
  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${index + 1}</td>
    <td>${todo.name}</td>
    <td>${todo.date}</td>
    <td><input type="checkbox" ${todo.done ? 'checked' : ''} onchange="toggleDone(${index})"></td>
    <td>
      <button class="btn btn-warning btn-sm" onclick="editTodo(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteTodo(${index})">Hapus</button>
    </td>
  `;

  tableBody.appendChild(row);
});
}

function toggleDone(index) {
todos[index].done = !todos[index].done;
renderTable();
}

function editTodo(index) {
const todo = todos[index];
document.getElementById('todo-name').value = todo.name;
document.getElementById('todo-date').value = todo.date;
editIndex = index;
}

function deleteTodo(index) {
todos.splice(index, 1);
renderTable();
}
