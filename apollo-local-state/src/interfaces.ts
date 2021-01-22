

export type ActionTypes = {
    editTodo: (j: number, t: string) => void
    deleteTodo: (j: number) => void
    completeTodo: (j: number) => void
    completeAllTodos: () => void
    setVisibilityFilters: (x: unknown) => void
    clearCompletedTodos: () => void
}