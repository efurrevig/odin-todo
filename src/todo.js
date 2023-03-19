export default class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = addToProject(project);
    }
    addToProject(name) {
        let project = JSON.parse(localStorage.getItem(name));
        project.todos.push(this);
    }
}