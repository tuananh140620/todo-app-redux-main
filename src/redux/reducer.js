const initSate = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    //array
    { id: 1, name: "Ronaldo", completed: false, priority: "High" },
    { id: 2, name: "Rashford", completed: false, priority: "Medium" },
    { id: 3, name: "Sancho", completed: false, priority: "Low" },
  ],
};

const rootReducer = (state = initSate, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: 5, name: "Sancho", completed: false, priority: "Low" },
        ],
      };

    default: 
    return state;
  }
}

export default rootReducer;
