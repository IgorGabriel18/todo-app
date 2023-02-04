import { ReactNode } from "react";

import "./styles.scss";

interface IProps {
    children: ReactNode;
}

export function AppLayout(props: IProps) {
    return <section className="AppLayout">{props.children}</section>;
}
