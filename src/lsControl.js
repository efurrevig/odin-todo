import Project from './project.js';
import Todo from './todo.js';

// takes name of project and returns Project object
function getProject(name) {
    const projectJSON = JSON.parse(localStorage.getItem(name));
    const project = Project.fromJSON(projectJSON);
    project.todos = project.todos.map(todoJSON => Todo.fromJSON(todoJSON));
    return project;
}

export { getProject };