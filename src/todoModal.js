import {format} from 'date-fns';

// constructor(title, description, dueDate, priority, project) {
//     this.title = title;
//     this.description = description;
//     this.dueDate = dueDate;
//     this.priority = priority;
//     this.project = addToProject(project);
// }


function titleInput() {
    const container = document.createElement('div'),
          label = document.createElement('label'),
          inputContainer = document.createElement('div'),
          input = document.createElement('input');
    
    container.classList.add('todo-form-container');
    inputContainer.classList.add('toto-form-input-container');

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
    
}

function dueDateInput() {
    
}

function priorityInput() {
        
}

function todoModal() {
    const modal = document.createElement('div');
    modal.classList.add('todo-modal');
    modal.classList.add('active');

    modal.appendChild(titleInput());
    // modal.appendChild(descriptionInput());
    // modal.appendChild(dueDateInput());
    // modal.appendChild(priorityInput());

    return modal;
}


export default todoModal;