import { Form } from "./Form";

import "./styles.scss";

export function Header() {
    return (
        <header className="Header">
            <h1 className="Header__title">Todo App</h1>
            <Form />
        </header>
    );
}
