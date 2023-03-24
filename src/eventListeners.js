import todoModal from './todoModal.js';
import projectModal from './projectModal.js';
import { getProject } from './lsControl.js';

const viewProject = item => {
    let activeSidebarItem = document.querySelector('.sidebar-list li.active');
    activeSidebarItem.classList.remove('active');
    item.target.classList.add('active');
    let project = getProject(item.target.textContent);
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
    addNewProjectButtonListener();
    addNewTodoButtonListener();
    addSidebarListeners();
}

export { addEventListeners, addSidebarListeners, addSidebarListener };