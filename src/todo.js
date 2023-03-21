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
        console.log(project); // log the project object to see what it looks like
        console.log(typeof project); // log the type of the project object
        console.log(project.constructor.name);
        project.saveToLS();
    }
}