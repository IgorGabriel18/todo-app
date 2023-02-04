import { Pen, Trash, X } from "phosphor-react";
import { FormEvent, useState } from "react";

import { useTodo } from "../../../../hooks/useTodo";
import { ITask } from "../../../../types";
import "./styles.scss";

export function Item(props: ITask) {
    const [visible, setVisible] = useState(false);
    const [newContent, setNewContent] = useState("");
    const { toggleDoneTask, editTask, deleteSelectedTask } = useTodo();

    function handleClickSubmit(ev: FormEvent<HTMLFormElement>) {
        ev.preventDefault();

        editTask(props.id, newContent);

        setNewContent("");
        setVisible(false);
    }

    return (
        <>
            <li className={`Item ${props.done && "Item--variant"}`} key={props.id}>
                <input
                    type="checkbox"
                    defaultChecked={props.done}
                    onClick={() => toggleDoneTask(props.id)}
                    className="Item__input"
                />
                <p className="Item__content">{props.content}</p>
                {props.done === false && (
                    <button type="button" onClick={() => setVisible(true)} className="Item__button">
                        <Pen className="Item__icon" />
                    </button>
                )}
                <button type="button" onClick={() => deleteSelectedTask(props.id)} className="Item__button">
                    <Trash className="Item__icon" />
                </button>
            </li>
            {visible && (
                <div className="modal">
                    <form className="modal__form" onSubmit={handleClickSubmit}>
                        <button className="modal__button" type="submit">
                            <Pen className="modal__icon" />
                        </button>
                        <button className="modal__button" type="button" onClick={() => setVisible(false)}>
                            <X className="modal__icon" />
                        </button>
                        <input
                            className="modal__input"
                            type="text"
                            defaultValue={props.content}
                            required
                            value={newContent}
                            onChange={(ev) => setNewContent(ev.target.value)}
                        />
                    </form>
                </div>
            )}
        </>
    );
}
