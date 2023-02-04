import { ITodoState } from "../../../types";

import { Item } from "./Item";
import "./styles.scss";

export function List(props: ITodoState) {
    return (
        <ul className="List">
            {props.tasks.map((item) => (
                <Item key={item.id} {...item} />
            ))}
        </ul>
    );
}
