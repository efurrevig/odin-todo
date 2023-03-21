import Project from './project.js';
// takes name of project and returns Project object
function getProject(name) {
    const projectJSON = JSON.parse(localStorage.getItem(name));
    const project = Project.fromJSON(projectJSON);
    return project;
}

export { getProject };