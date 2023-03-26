import './style.css';
import {getProjects} from './project.js';
import { addEventListeners, addSidebarListener, addDeleteTodoListener,
        addTodoCheckboxListener } from './eventListeners.js';

const projects = getProjects();

function createSidebar() {
    // project nav
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
  
    // project nav header
    sidebar.appendChild((() => {
      const headerContainer = document.createElement('div');
      headerContainer.classList.add('sidebar-header');

      let h2 = document.createElement('h2');
      h2.textContent = 'Listify';
      headerContainer.appendChild(h2);

      return headerContainer;
    })());
  
    // new project button
    sidebar.appendChild((() => {
      const newProjectButton = document.createElement('button');
      newProjectButton.classList.add('new-project-button');
      newProjectButton.textContent = 'Create Project';
      return newProjectButton;
    })());


    // project nav list
    const navListContainer = document.createElement('div');
    navListContainer.classList.add('sidebar-container');

    navListContainer.appendChild((() => {
      const navList = document.createElement('ul');
      navList.classList.add('sidebar-list');
      projects.forEach(project => {
        let li = document.createElement('li');
        li.textContent = project.name;
        navList.appendChild(li);
      });
      navList.firstChild.classList.add('active');
      return navList;
    })());
  
    sidebar.appendChild(navListContainer);
  
    return sidebar;
}

function reloadNavList() {
    const navList = document.querySelector('.sidebar-list');
    navList.innerHTML = '';
    projects.forEach(project => {
        let li = document.createElement('li');
        li.textContent = project.name;
        addSidebarListener(li);
        navList.appendChild(li);
    });
    navList.firstChild.classList.add('active');
}

function createTodoDisplay(project) {

    const todoDisplay = document.createElement('div');
    todoDisplay.classList.add('todo-display');

    const todoHeader = () => {
        const header = document.createElement('div');
        header.classList.add('todo-header');

        const title = document.createElement('h2');
        title.textContent = project.name;
        header.appendChild(title);

        const button = document.createElement('button');
        button.id = project.name;
        button.classList.add('new-todo-button');
        button.textContent = 'New Todo';
        header.appendChild(button);

        return header;
    };

    const todoList = () => {
        const list = document.createElement('div');
        list.classList.add('todo-list');


        const projectTodos = project.todos;
        for (let i = 0; i < projectTodos.length; i++) {
            const todo = projectTodos[i];
            list.appendChild(createTodoItem(todo, project))
        }
        return list
    }
    todoDisplay.appendChild(todoHeader());
    todoDisplay.appendChild(todoList());

    return todoDisplay;

}

function createTodoItem(todo, project) {
    const todoContainer = document.createElement('div');
    todoContainer.classList.add('todo-item');
    todoContainer.id = todo.title;

    const checkbox = document.createElement('input');
    checkbox.className = 'todo-checkbox';
    checkbox.type = 'checkbox';
    checkbox.checked = todo.completed;
    if (checkbox.checked) {
        todoContainer.classList.add('completed');
    }
    addTodoCheckboxListener(checkbox, todo, project);
    // if checkbox.checked, add class 'completed' to todoContainer
    
    const title = document.createElement('p');
    title.textContent = todo.title;

    const dueDate = document.createElement('p');
    dueDate.textContent = todo.dueDate;

    const priority = document.createElement('i');
    priority.className = 'priority-icon fa-solid fa-temperature-' + todo.priority;

    const deleteButton = document.createElement('i');
    deleteButton.className = 'fa-solid fa-trash todo-delete-button';
    deleteButton.id = "delete-" + todo.title;
    addDeleteTodoListener(deleteButton, todo, project);

    todoContainer.appendChild(checkbox);
    todoContainer.appendChild(title);
    todoContainer.appendChild(dueDate);
    todoContainer.appendChild(priority);
    todoContainer.appendChild(deleteButton);
    
    return todoContainer;
    
}

function createDisplay() {
    const display = document.createElement('div');
    display.classList.add('container-main');

    display.appendChild(createSidebar());
    
    // ToDo display
    const project = projects[0];
    const todoDisplayContainer = document.createElement('div');
    todoDisplayContainer.id = 'todo-display-container';
    todoDisplayContainer.appendChild(createTodoDisplay(project));
    display.appendChild(todoDisplayContainer);

    return display;
    
}

document.body.appendChild(createDisplay());
addEventListeners();



export { reloadNavList, projects, createTodoItem, createTodoDisplay };