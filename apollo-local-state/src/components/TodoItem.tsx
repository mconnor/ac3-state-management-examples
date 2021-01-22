import React, { useEffect, useState } from 'react'
import { Todo, Todos } from '../models/Todos'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
// import { ActionTypes } from '../interfaces'
import { TodoMutationsType } from '../operations/mutations'

type Props = {
    todo: Todo
} & TodoMutationsType;

export default function ({ todo, completeTodo, deleteTodo, editTodo }: Props): JSX.Element {

    const [state, setState] = useState<{ editing: boolean }>({
        editing: false
    })

    const [element, setElement] = useState<React.ReactNode | null>()


    const handleSave = (id: number, text: string) => {
        if (text.length === 0) {
            deleteTodo && deleteTodo(id)
        } else {
            editTodo && editTodo(id, text)
        }
        setState({ editing: false })
    }

    ///





    return (
        <li className={classnames({
            completed: todo.completed,
            editing: state.editing
        })}>
            {state.editing ?
                <TodoTextInput text={todo.text}
                    editing={state.editing}
                    onSave={(text: string) => handleSave(todo.id, text)} />
                :
                <div className="view">
                    <input className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => {
                            completeTodo && completeTodo(todo.id)
                        }} />
                    <label onDoubleClick={() => {
                        setState({ editing: true })
                    }}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                        onClick={() => deleteTodo && deleteTodo(todo.id)} />
                </div>
            }
        </li>
    )
}

