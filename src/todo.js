export default class Todo {
    constructor(title, description, dueDate, priority, completed = false, project = null) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
        if (project) {
            this.addToProject(project);
        }
    }

    static fromJSON(json) {
        return new Todo(json.title, json.description, json.dueDate, json.priority, json.completed);
    }

    addToProject(project) {
        project.todos.push(this);
        project.saveToLS();
    }

    toggleCompleted(project) {
        this.completed = !this.completed;
        project.saveToLS();
    }
}