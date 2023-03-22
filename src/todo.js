export default class Todo {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.addToProject(project)
    }
    addToProject(project) {
        project.todos.push(this);
        project.saveToLS();
    }
}