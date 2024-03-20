//create to do item

export default function newToDo(ttle, desc, due, prio) {
    let title = ttle;
    let description = desc;
    let dueDate = due;
    let priority = prio;
    let done = false;

    return { title, description, dueDate, priority, done };
};