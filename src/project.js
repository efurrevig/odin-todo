export default class Project {
    constructor(name, description, todos = [], nextId = 0) {
        this.name = name;
        this.description = description;
        this.todos = todos;
        this.nextId = nextId;
        this.saveToLS();
    }

    saveToLS() {
        localStorage.setItem(this.name, JSON.stringify(this.toJSON()));
    }

    toJSON() {
        return {
            name: this.name,
            description: this.description,
            todos: this.todos,
            nextId: this.nextId,
            __class__: 'Project'
        };
    }

    static fromJSON(json) {
        if (json.__class__ === 'Project') {
            return new Project(json.name, json.description, json.todos, json.nextId);
        }
        throw new Error('Invalid JSON object');
    }
}
function buildDefaultProject() {
    let defaultProject = new Project("Default", "default project");
    return defaultProject;
}

export function getProjects() {
    let projects = [];

    if (localStorage.length === 0) {
        projects.push(buildDefaultProject());
    }
    else {
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const projectJSON = JSON.parse(localStorage.getItem(key));
            const project = Project.fromJSON(projectJSON);
            projects.push(project);
        }
    }
    return projects;
}