import { Trash } from "phosphor-react";

import { ITodo } from "~types/todo";

import "./styles.scss";

interface ITodoCardProps {
    toggleDone: (id: number) => void;
    deleteSelected: (id: number) => void;
}

export function TodoCard({ id, date, description, done, toggleDone, deleteSelected }: ITodo & ITodoCardProps) {
    return (
        <li className={`todo-card ${done && "todo-card--variant"}`}>
            <div className="todo-card__header">
                <p className="todo-card__date">{date}</p>
                <p className="todo-card__id">#{id}</p>
            </div>
            <div className="todo-card__main">
                <input
                    type="checkbox"
                    defaultChecked={done}
                    onClick={() => toggleDone(id)}
                    className="todo-card__input"
                />
                <p className="todo-card__description">{description}</p>
                <button
                    type="button"
                    onClick={() => deleteSelected(id)}
                    className="todo-card__button"
                >
                    <Trash className="todo-card__icon" />
                </button>
            </div>
        </li>
    );
}
