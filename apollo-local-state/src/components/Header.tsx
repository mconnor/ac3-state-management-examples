import React from 'react'

import TodoTextInput from './TodoTextInput'
import { TodoMutationsType } from '../operations/mutations'

// interface HeaderProps {
//     addTodo: (text: string) => void;
// } 

const Header = ({ addTodo }: Partial<TodoMutationsType>) => (
    <header className="header">
        <h1>todos</h1>
        <TodoTextInput
            newTodo
            onSave={(text: string) => {
                if (text.length !== 0) {
                    addTodo && addTodo(text);
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>
);


export default Header
