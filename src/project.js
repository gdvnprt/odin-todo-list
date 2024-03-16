export default function newProject(ttle, desc, due, prio) {
    const title = ttle;
    const description = desc;
    let dueDate = due; 
    let priority = prio
    let list = [];
    let done = false

    return { title, description, dueDate, priority, list, done };
};
