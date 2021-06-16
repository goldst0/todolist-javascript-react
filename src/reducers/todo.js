import { ADDTASK, DONETASK, REMOVETASK } from "../actions";

const initialState = {
  lists: [
    {
      id: 1,
      task: "Banana",
      detail: "bad",
      person: "cat",
      deadline: "2021-6-25",
      done: false,
    },
    {
      id: 2,
      task: "Strawberry",
      detail: "good",
      person: "angel",
      deadline: "2021-6-31",
      done: false,
    },
    {
      id: 3,
      task: "Pineapple",
      detail: "better",
      person: "badman",
      deadline: "2021-7-2",
      done: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return { lists: [...state.lists, action.todo] };
    case DONETASK:
      const doneTasks = [...state.lists];
      doneTasks[action.index].done = !doneTasks[action.index].done;
      return {
        lists: doneTasks,
      };
    case REMOVETASK:
      const removeTasks = [...state.lists];
      removeTasks.splice(action.index, 1);
      return {
        lists: removeTasks,
      };
    default:
      return state;
  }
};
