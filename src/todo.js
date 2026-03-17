export class Todo{
    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.isDone = false;
    }
}

// const todo1 = new Todo("Finish project", "Lorem ipsum dolor sit amet", Date.now(), "high")

// console.log(todo1)

