export const selectCompletedTodo = (state) =>
  state.todo.list.filter(item => item.completed);

export const selecNotCompletedTodo = (state) =>
  state.todo.list.filter(item => !item.completed);