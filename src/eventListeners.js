import todoModal from './todoModal.js';


const viewProject = item => {
    console.log('hello');
    item.target.classList.add('active');
    let project = JSON.parse(localStorage.getItem(item.target.textContent));
    console.log(project);
}

const addTodo = item => {
    document.body.appendChild(todoModal());
}
const addEventListeners = () => {
    // Add event listeners to the DOM
    document.querySelectorAll('.sidebar-list li').forEach(item => {
        item.addEventListener('click', viewProject);
    });

    document.getElementById('new-todo-button').addEventListener('click', addTodo);
}

export default addEventListeners;