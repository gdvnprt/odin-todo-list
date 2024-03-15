export default function newProject(ttle, desc, due) {
    const title = ttle;
    const description = desc;
    let dueDate = due;
    let list = [];
    let done = false

    return { title, description, dueDate, priority, list, done };
};
