import { useTodo } from "../../hooks/useTodo";

import { Figure } from "./Figure";
import { List } from "./List";
import "./styles.scss";

export function Main() {
    const { todo, deleteAllTasks } = useTodo();

    return (
        <main className="Main">
            {todo.length <= 0 ? (
                <Figure />
            ) : (
                <>
                    <List tasks={todo} />
                    <button className="Main__button" type="button" onClick={deleteAllTasks}>
                        Delete All
                    </button>
                </>
            )}
        </main>
    );
}
