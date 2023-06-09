import todoModal from './todoModal.js';
import projectModal from './projectModal.js';
import { getProject } from './lsControl.js';
import { createTodoDisplay } from './index.js';

const viewProject = item => {
    const activeSidebarItem = document.querySelector('.sidebar-list li.active');
    activeSidebarItem.classList.remove('active');
    item.target.classList.add('active');
    const project = getProject(item.target.textContent);
    const todoDisplayContainer = document.getElementById('todo-display-container');
    todoDisplayContainer.innerHTML = '';
    todoDisplayContainer.appendChild(createTodoDisplay(project));
    addNewTodoButtonListener();
}

const displayTodoModal = item => {
    let projectName = item.target.id;
    let project = getProject(projectName);
    document.body.appendChild(todoModal(project));
}

const createProject = () => {
    document.body.appendChild(projectModal());
}

const markTodoComplete = item => {
    console.log(item);
    // gray out and strike through item
}

const expandTodo = (item) => {
    //expand and collapse todo
    console.log(item);
}

const deleteTodo = (todo, project) => {
    console.log(todo);
    console.log(project);
    const todoDisplayContainer = document.getElementById(todo.title);
    todoDisplayContainer.remove();
    project.removeTodo(todo.title);
    project.saveToLS();
}

const addDeleteTodoListener = (button, todo, project) => {
    button.addEventListener('click', () => {
        deleteTodo(todo, project)
    });
}

const addTodoCheckboxListener = (checkbox, todo, project) => {
    checkbox.addEventListener('click', () => {
        const todoDisplayContainer = document.getElementById(todo.title);
        todoDisplayContainer.classList.toggle('completed');
        todo.toggleCompleted(project);
    });
}
const addSidebarListener = (item) => {
    item.addEventListener('click', viewProject);
}

const addSidebarListeners = () => {
    document.querySelectorAll('.sidebar-list li').forEach(item => {
        addSidebarListener(item);
    });
}

const todoCheckboxListener = (item) => {
    item.addEventListener('click', markTodoComplete);
}

const todoExpandListener = (item) => {
    item.addEventListener('click', expandTodo);

}

const addTodoListeners = () => {
    //checkbox

    //expand
}

const addNewProjectButtonListener = () => {
    document.querySelector('.new-project-button').addEventListener('click', createProject);
}

const addNewTodoButtonListener = () => {
    document.querySelector('.new-todo-button').addEventListener('click', displayTodoModal);
}


const addEventListeners = () => {
    // Add event listeners to the DOM
    addSidebarListeners();
    addNewProjectButtonListener();
    addNewTodoButtonListener();
}

export { 
    addEventListeners, addSidebarListeners, addSidebarListener,
    addNewProjectButtonListener, addNewTodoButtonListener,
    addDeleteTodoListener, addTodoCheckboxListener
};