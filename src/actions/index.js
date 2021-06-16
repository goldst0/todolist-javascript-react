export const ADDTASK = "addTask";

export const addTask = (id, task, detail, person, deadline) => ({
  type: ADDTASK,
  todo: {
    id: id,
    task: task,
    detail: detail,
    person: person,
    deadline: deadline,
    done: false,
  },
});

export const DONETASK = "doneTask";

export const doneTask = (index) => ({
  type: DONETASK,
  index: index,
});

export const REMOVETASK = "removeTask";

export const removeTask = (index) => ({
  type: REMOVETASK,
  index: index,
});
