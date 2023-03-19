import './style.css';
import { getProjects } from './project.js';
import addEventListeners from './eventListeners.js';


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
  
    // project nav list
    const navListContainer = document.createElement('div');
    navListContainer.classList.add('sidebar-container');

    navListContainer.appendChild((() => {
      const navList = document.createElement('ul');
      navList.classList.add('sidebar-list');
      projects.forEach(project => {
        let li = document.createElement('li');
        li.textContent = project;
        navList.appendChild(li);
      });
      navList.firstChild.classList.add('active');
      return navList;
    })());
  
    sidebar.appendChild(navListContainer);
  
    return sidebar;
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
        button.textContent = 'New Todo';
        header.appendChild(button);

        return header;
    };

    const todoList = () => {
        const list = document.createElement('div');
        list.classList.add('todo-list');
        
        for (let i = 0; i < 5; i++) {
            const todo = document.createElement('div');
            todo.classList.add('todo-item');
            todo.textContent = 'todo ' + i;
            list.appendChild(todo);
        }
        return list
    }
    todoDisplay.appendChild(todoHeader());
    todoDisplay.appendChild(todoList());

    return todoDisplay;

}

function createDisplay() {
    const display = document.createElement('div');
    display.classList.add('container-main');

    display.appendChild(createSidebar());
    
    // ToDo display
    const project = JSON.parse(localStorage[projects[0]]);
    display.appendChild(createTodoDisplay(project));

    return display;
    
}

document.body.appendChild(createDisplay());
addEventListeners()



