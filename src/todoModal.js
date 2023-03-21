import Todo from './todo.js';
import Project from './project.js';
// constructor(title, description, dueDate, priority, project) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.project = addToProject(project);
// }

function closeModal() {
    document.getElementById('todo-modal').remove();
}

function formHeader() {
    const headerContainer = document.createElement('div'),
          button = document.createElement('button'),
          title = document.createElement('h2');

    title.textContent = 'New Todo';

    button.id = 'close-form-button';
    button.textContent = 'X';
    button.addEventListener('click', closeModal);

    headerContainer.className = 'todo-form-header';
    headerContainer.appendChild(title);
    headerContainer.appendChild(button);

    return headerContainer;
}


function titleInput() {
    const container = document.createElement('div'),
          label = document.createElement('label'),
          inputContainer = document.createElement('div'),
          input = document.createElement('input');
    
    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-input-container');

    label.textContent = 'Title';
    label.htmlFor = 'todo-title';

    input.id = 'todo-title';
    input.type = 'text';
    input.placeholder = 'Enter title';

    inputContainer.appendChild(input);
    container.appendChild(label);
    container.appendChild(inputContainer);

    return container

}

function descriptionInput() {
    const container = document.createElement('div'),
          label = document.createElement('label'),
          inputContainer = document.createElement('div'),
          input = document.createElement('textarea');

    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-input-container');

    label.textContent = 'Description';
    label.htmlFor = 'todo-description';

    input.id = 'todo-description';
    input.placeholder = 'Enter description';

    inputContainer.appendChild(input);
    container.appendChild(label);
    container.appendChild(inputContainer);

    return container;
    
}

function dueDateInput() {
    const container = document.createElement('div'),
          label = document.createElement('label'),
          inputContainer = document.createElement('div'),
          input = document.createElement('input');

    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-input-container');

    label.textContent = 'Due Date';
    label.htmlFor = 'todo-due-date';

    input.id = 'todo-due-date';
    input.type = 'date';
    input.placeholder = 'Enter due date';

    inputContainer.appendChild(input);
    container.appendChild(label);
    container.appendChild(inputContainer);

    return container;
    
}

function priorityInput() {
    const container = document.createElement('div'),
          label = document.createElement('label'),
          inputContainer = document.createElement('div'),
          options = [['Low', 'empty'], ['Medium', 'half'], ['High', 'full']];

    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-radio-container');

    label.id = 'priority-label';
    label.textContent = 'Priority';
    container.appendChild(label);

    options.forEach(option => {
        const div = document.createElement('div'),
              input = document.createElement('input'),
              icon = document.createElement('i'),
              btnLabel = document.createElement('label');

        input.id = option[0];
        input.type = 'radio';
        input.name = 'priority';
        input.value = option[0];
        input.className = 'radio-button';
        div.appendChild(input);

        icon.className = 'fa-solid fa-temperature-' + option[1];

        btnLabel.htmlFor = option[0];
        btnLabel.className = 'radio-button-label';
        btnLabel.appendChild(icon);

        div.appendChild(btnLabel);
        inputContainer.appendChild(div);

    });

    
    container.appendChild(inputContainer);

    return container;
        
}

function submitButton(project) {
    const button = document.createElement('button');

    button.textContent = 'Create Todo';
    button.classList.add('todo-form-submit-button');
    button.addEventListener('click', () => {
        const title = document.getElementById('todo-title').value,
              description = document.getElementById('todo-description').value,
              dueDate = document.getElementById('todo-due-date').value,
              priorities = document.querySelectorAll('priority');
        let priority = 'Low';
        priorities.forEach(p => {
            if (p.checked) {
                priority = p.value;
                return
            }
        });
        const todo = new Todo(title, description, dueDate, priority, project);
        closeModal();
        console.log(todo);
    });

    return button;
}
function todoModal(project) {
    const modal = document.createElement('div'),
          modalContent = document.createElement('div');
    
    modalContent.classList.add('todo-modal-content');
    modalContent.appendChild(formHeader());
    modalContent.appendChild(titleInput());
    modalContent.appendChild(descriptionInput());
    modalContent.appendChild(dueDateInput());
    modalContent.appendChild(priorityInput());
    modalContent.appendChild(submitButton(project));

    modal.id = 'todo-modal';
    modal.className = 'modal';
    modal.appendChild(modalContent);

    return modal;
}


export default todoModal;