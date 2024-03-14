//create to do item

export default function newToDo(ttle, desc, due, prio) {
    const title = ttle;
    const description = desc;
    let dueDate = due;
    let priority = prio;
    let done = false;
    const complete = function() {
        done = true;
    };

    return { title, description, dueDate, priority, done, complete };
};