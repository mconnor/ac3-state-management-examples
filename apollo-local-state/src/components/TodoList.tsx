import React from 'react'

import TodoItem from './TodoItem'
import { Todo, Todos } from '../models/Todos'
import { TodoMutationsType } from '../operations/mutations'

type Props = {
    filteredTodos: Todos,
    actions: TodoMutationsType
}

const TodoList = ({ filteredTodos, actions }: Props) => (
    <ul className="todo-list">
        {filteredTodos.map((todo: Todo) =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
        )}
    </ul>
)



export default TodoList
