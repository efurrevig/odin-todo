class Project {
    constructor(name, description, todos = [], nextId = 0) {
        this.name = name;
        this.description = description;
        this.todos = todos;
        this.nextId = nextId;
        this.saveToLS();
    }
    saveToLS() {
        localStorage.setItem(this.name, JSON.stringify(this));
    }
}

function buildDefaultProject() {
    let defaultProject = new Project("Default", "default project");
    return defaultProject;
}

export function getProjects() {
    let projects = [];

    if(localStorage.length === 0) {
        projects.push(buildDefaultProject());
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            projects.push(localStorage.key(i));
        }
    }
    return projects;
}  