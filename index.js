'use strict';

console.log('funguju!');

// vytvoreni pole s ukoly
let tasks = ['Vyprat prádlo', 'Uvařit oběd', 'Uplést pár ok v šátku', 'Jít s dětmi na hřiště', 'Vyžehlit roušky', 'Učit se JavaScript'];

// aktualizace seznamu ukolu
const updateTasks = () => {
  const tasksElm = document.querySelector('.todo__tasks');
  tasksElm.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    tasksElm.innerHTML += `<div class="task">${tasks[i]}</div>`;
  }
}
updateTasks()

// pridani noveho ukolu
const addNewTask = () => {
  const input = document.querySelector('#new-task').value;
  if (input === '') {
    alert("Zapiš úkol do prázdného pole a kliknutím na tlačítko ho přidej na seznam.");
  } else {
    updateTasks(tasks.push(input))
  }
}

const button = document.querySelector('.btn-add');
button.addEventListener('click', addNewTask);