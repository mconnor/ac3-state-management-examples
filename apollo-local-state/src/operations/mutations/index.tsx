
import createAddTodo from "./addTodo/addTodo";
import createClearCompletedTodos from "./clearCompletedTodos/clearCompletedTodos";
import createCompleteTodo from "./completeTodo/completeTodo";
import createCompleteAllTodos from "./completeAllTodos/completeAllTodos";
import createDeleteTodo from "./deleteTodo/deleteTodo";
import createEditTodo from "./editTodo/editTodo";
import createSetVisibilityFilter from "./setVisibilityFilter/setVisibilityFilter";
import { todosVar, visibilityFilterVar } from "../../cache";

export const todoMutations = {
    addTodo: createAddTodo(todosVar),
    clearCompletedTodos: createClearCompletedTodos(todosVar),
    completeTodo: createCompleteTodo(todosVar),
    completeAllTodos: createCompleteAllTodos(todosVar),
    deleteTodo: createDeleteTodo(todosVar),
    editTodo: createEditTodo(todosVar),
    setVisibilityFilter: createSetVisibilityFilter(visibilityFilterVar)
}


export type TodoMutationsType = Partial<typeof todoMutations>
//



// export type CreateAddTodoType = typeof createAddTodo(todosVar);

// export type ClearCompleteType = typeof createCompleteTodo(todosVar)

// export type CreateCompleteTodoType = typeof createCompleteTodo(todosVar)

// export type CreateCompleteAllTodosType = typeof createCompleteAllTodos(todosVar)

// export type CreateDeleteTodoType = typeof createDeleteTodo(todosVar)

// export type CreateEditTodoType = typeof createEditTodo(todosVar)

// export type CreateSetVisibilityFilterType = typeof createSetVisibilityFilter(todosVar)

// // export type ClearCompleteType = typeof createCompleteAllTodos(todosVar)


// export type SetVisibilityFilterType = typeof setVisibilityFilter(visibilityFilterVar)
// //Partial<typeof todoMutations>