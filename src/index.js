import './style.css';

//const projects = getProjects();

//temp
const projects = ["default", "project1", "project2", "project3"]

function createDisplay() {
    // display
    const display = document.createElement('div');
    display.classList.add('container-main');

    // project nav
    const projectNav = document.createElement('div');
    projectNav.classList.add('project-nav');
        // project nav header
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('project-nav-header');
    let h2 = document.createElement('h2');
    h2.textContent = 'Listify';
    headerContainer.appendChild(h2);
    projectNav.appendChild(headerContainer);

        // project nav list
    const navListContainer = document.createElement('div');
    navListContainer.classList.add('project-nav-container');
    const navList = document.createElement('ul');
    navList.classList.add('project-nav-list');
    projects.forEach(project => {
        let li = document.createElement('li');
        li.textContent = project;
        navList.appendChild(li);
    });
    navListContainer.appendChild(navList);
    projectNav.appendChild(navListContainer);


    display.appendChild(projectNav);
    
    // ToDo display
    const todoDisplay = document.createElement('div');
    todoDisplay.classList.add('todo-display');
    display.appendChild(todoDisplay);

    return display;
    
}

document.body.appendChild(createDisplay());