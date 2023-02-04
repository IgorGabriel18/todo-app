import { Plus } from "phosphor-react";
import { FormEvent, useState } from "react";

import { useTodo } from "../../../hooks/useTodo";
import "./styles.scss";

export function Form() {
    const [task, setTask] = useState("");
    const { createTask } = useTodo();

    function handleClickSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        createTask({
            id: Math.random(),
            content: task,
            done: false
        });

        setTask("");
    }

    return (
        <form className="Form" onSubmit={handleClickSubmit}>
            <input
                className="Form__input"
                type="text"
                required
                placeholder="create a new task"
                value={task}
                onChange={(ev) => setTask(ev.target.value)}
            />
            <button className="Form__button" type="submit">
                <Plus className="Form__icon" />
            </button>
        </form>
    );
}
