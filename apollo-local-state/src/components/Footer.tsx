import React from 'react'

import Link from './Link'
import { VisibilityFilters, VisibilityFilter } from '../models/VisibilityFilter';
import { TodoMutationsType } from '../operations/mutations'

type FooterProps = {
    activeVisibilityFilter: VisibilityFilter;
    activeCount: number;
    completedCount: number;
    onClearCompleted?: () => void

} & Partial<TodoMutationsType>

const Footer = (props: FooterProps) => {
    // clearCompletedTodos: () => void
    const { activeCount, completedCount, onClearCompleted, activeVisibilityFilter, setVisibilityFilter } = props;
    // const onClearCompleted = props.clearCompletedTodos

    const itemWord = activeCount === 1 ? "item" : "items";
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount || "No"}</strong> {itemWord} left
      </span>
            <ul className="filters">
                {Object.keys(VisibilityFilters).map((key) => VisibilityFilters[key]).map((filter) => (
                    <li key={filter.id}>
                        <Link
                            active={activeVisibilityFilter.id === filter.id}
                            setFilter={() => setVisibilityFilter && setVisibilityFilter(filter)}>
                            {filter.displayName}</Link>
                    </li>
                ))}
            </ul>
            {!!completedCount && (
                <button className="clear-completed" onClick={() => onClearCompleted && onClearCompleted()}>
                    Clear completed
                </button>
            )
            }
        </footer >
    );
};

export default Footer
