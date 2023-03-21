import todoModal from './todoModal.js';
import { getProject } from './lsControl.js';

const viewProject = item => {
    item.target.classList.add('active');
    let project = getProject(item.target.textContent);
    console.log(project);
}

const addTodo = item => {
    let projectName = item.target.id;
    let project = getProject(projectName);
    document.body.appendChild(todoModal(project));
}
const addEventListeners = () => {
    // Add event listeners to the DOM
    document.querySelectorAll('.sidebar-list li').forEach(item => {
        item.addEventListener('click', viewProject);
    });

    document.querySelector('.new-todo-button').addEventListener('click', addTodo);
}

export default addEventListeners;