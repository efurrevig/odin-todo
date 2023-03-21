import Todo from './todo.js';

// constructor(title, description, dueDate, priority, project) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.project = addToProject(project);
// }


function formHeader() {
    const headerContainer = document.createElement('div'),
          button = document.createElement('button'),
          title = document.createElement('h2');

    title.textContent = 'New Todo';

    button.id = 'close-form-button';
    button.textContent = 'X';
    button.addEventListener('click', () => {
        document.getElementById('todo-modal').remove();
    });

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
          input = document.createElement('input');

    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-input-container');

    label.textContent = 'Description';
    label.htmlFor = 'todo-description';

    input.id = 'todo-description';
    input.type = 'textarea';
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
          options = ['Low', 'Medium', 'High'];

    container.classList.add('todo-form-container');
    inputContainer.classList.add('todo-form-input-container');

    options.forEach(option => {
        
    });

    
    container.appendChild(label);
    container.appendChild(inputContainer);

    return container;
        
}

function submitButton() {
    const button = document.createElement('button');

    button.textContent = 'Submit';
    button.addEventListener('click', () => {
        const title = document.getElementById('todo-title').value,
              description = document.getElementById('todo-description').value,
              dueDate = document.getElementById('todo-due-date').value;
              //priority = document.getElementById('todo-priority').value;
        let priority = 1;
        const todo = new Todo(title, description, dueDate, priority, 'default');
        console.log(todo);
    });

    return button;
}
function todoModal() {
    const modal = document.createElement('div'),
          modalContent = document.createElement('div');
    
    modalContent.classList.add('todo-modal-content');
    modalContent.appendChild(formHeader());
    modalContent.appendChild(titleInput());
    modalContent.appendChild(descriptionInput());
    modalContent.appendChild(dueDateInput());
    //modalContent.appendChild(priorityInput());
    modalContent.appendChild(submitButton());

    modal.id = 'todo-modal';
    modal.className = 'modal';
    modal.appendChild(modalContent);
    // modal.appendChild(dueDateInput());
    // modal.appendChild(priorityInput());

    return modal;
}


export default todoModal;