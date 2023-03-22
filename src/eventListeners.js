import todoModal from './todoModal.js';
import projectModal from './projectModal.js';
import { getProject } from './lsControl.js';

const viewProject = item => {
    item.target.classList.add('active');
    let project = getProject(item.target.textContent);
}

const addTodo = item => {
    let projectName = item.target.id;
    let project = getProject(projectName);
    document.body.appendChild(todoModal(project));
}

const createProject = () => {
    // Create a new project
    document.body.appendChild(projectModal());
    console.log('create project');
}

const addSidebarListeners = () => {
    document.querySelectorAll('.sidebar-list li').forEach(item => {
        item.addEventListener('click', viewProject);
    });
}

const addEventListeners = () => {
    // Add event listeners to the DOM

    document.querySelector('.new-todo-button').addEventListener('click', addTodo);
    document.querySelector('.new-project-button').addEventListener('click', createProject);
}

export { addEventListeners, addSidebarListeners };