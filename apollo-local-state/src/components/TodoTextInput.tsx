import React, { useState } from 'react'

import classnames from 'classnames'
import { setConstantValue } from 'typescript'
import { InputType } from 'zlib'


type PropTypes = {
    onSave: (t: string) => void
    text?: string
    placeholder?: string
    editing?: boolean
    newTodo?: boolean
}
export default function TodoTextInput({ onSave,
    placeholder,
    editing,
    newTodo,
    ...rest }: PropTypes): JSX.Element {

    const [text, setText] = useState<string | undefined>(rest.text)


    const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleSubmit = (e: React.MouseEvent) => {

        if (text) {
            onSave(text.trim())
            if (newTodo) {
                setText('')
            }

        }
    }
    return (
        <form>
            <label>   Name: </label>
            <input className={
                classnames({
                    edit: editing,
                    'new-todo': newTodo
                })}
                // type="text"
                placeholder={placeholder}
                autoFocus={true}
                value={text}

                onBlur={(e) => {
                    if (!newTodo) {
                        onSave(e.target.value)
                    }
                }}
                onChange={(e) => setText(e.target.value)}


            />
            <button type='button' onMouseDown={handleSubmit}>submit </button>
        </form>
    )

}

