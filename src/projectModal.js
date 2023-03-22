import Project from "./project";
import { reloadNavList, projects } from "./index";
function closeModal() {
    document.getElementById('project-modal').remove();

}


function formHeader() {
    const headerContainer = document.createElement('div'),
          button = document.createElement('button'),
          title = document.createElement('h2');

    title.textContent = 'New Project';

    button.id = 'close-form-button';
    button.textContent = 'X';
    button.addEventListener('click', closeModal);

    headerContainer.className = 'form-header';
    headerContainer.appendChild(title);
    headerContainer.appendChild(button);

    return headerContainer;
}
function nameInput() {
    const container = document.createElement('div'),
    label = document.createElement('label'),
    inputContainer = document.createElement('div'),
    input = document.createElement('input');

    container.classList.add('form-container');
    inputContainer.classList.add('form-input-container');

    label.textContent = 'Title';
    label.htmlFor = 'project-title';

    input.id = 'project-title';
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

    container.classList.add('form-container');
    inputContainer.classList.add('form-input-container');

    label.textContent = 'Description';
    label.htmlFor = 'project-description';

    input.id = 'description';
    input.placeholder = 'Enter description';

    inputContainer.appendChild(input);
    container.appendChild(label);
    container.appendChild(inputContainer);

    return container;
}

function submitButton() {
    const button = document.createElement('button');

    button.classList.add('form-submit-button');
    button.textContent = 'Create Project';
    button.addEventListener('click', submitForm);

    return button;
}

function submitForm() {
    const title = document.getElementById('project-title').value,
          description = document.getElementById('description').value;
    const project = new Project(title, description);
    projects.push(project);
    reloadNavList();
    closeModal();
}


function projectModal() {
    const modal = document.createElement('div'),
          modalContent = document.createElement('div');
    
    modalContent.classList.add('project-modal-content');
    modalContent.appendChild(formHeader());
    modalContent.appendChild(nameInput());
    modalContent.appendChild(descriptionInput());
    modalContent.appendChild(submitButton());


    modal.id = 'project-modal';
    modal.classList.add('modal');
    modal.appendChild(modalContent);

    return modal;
}


export default projectModal;