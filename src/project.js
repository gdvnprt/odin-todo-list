import newToDo from './newToDo.js';

export default function newProject(ttle, desc, due) {
    const title = ttle;
    const description = desc;
    let dueDate = due;
    let list = [];
    const addToDo = list.push(newToDo());
    let done = false
    const complete = function() {
        done = true;
    };

    return { title, description, dueDate, priority, addToDo, done, complete };
};
