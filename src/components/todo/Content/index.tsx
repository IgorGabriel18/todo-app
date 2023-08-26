import illustrationIcon from "~assets/ilustration.svg";
import { useTodo } from "~hooks/useTodo";

import { TodoCard } from "../TodoCard";
import "./styles.scss";

export function Content() {
    const { todos, handleClickToggleDone, handleClickDeleteSelected, handleClickDeleteAll } = useTodo();

    return (
        <main className="content">
            {todos.length <= 0 ? (
                <figure className="content__figure">
                    <img
                        src={illustrationIcon}
                        alt="Illustration"
                        className="content__image"
                    />
                    <figcaption className="content__title">No tasks at the moment</figcaption>
                </figure>
            ) : (
                <>
                    <ul className="content__list">
                        {todos.map((todo) => (
                            <TodoCard
                                key={todo.id}
                                {...todo}
                                toggleDone={handleClickToggleDone}
                                deleteSelected={handleClickDeleteSelected}
                            />
                        ))}
                    </ul>
                    <button
                        type="button"
                        onClick={handleClickDeleteAll}
                        className="content__button"
                    >
                        DELETE ALL
                    </button>
                </>
            )}
        </main>
    );
}
