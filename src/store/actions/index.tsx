import { ITask } from "../../types";

import { CREATE, TOGGLE_DONE, EDIT, DELETE_SELECTED, DELETE_ALL } from "./types";

export function create(props: ITask) {
    return {
        type: CREATE,
        payload: props
    };
}

export function toggleDone(id: number) {
    return {
        type: TOGGLE_DONE,
        payload: { id: id }
    };
}

export function edit(id: number, content: string) {
    return {
        type: EDIT,
        payload: { id: id, content: content }
    };
}

export function deleteSelected(id: number) {
    return {
        type: DELETE_SELECTED,
        payload: { id: id }
    };
}

export function deleteAll() {
    return {
        type: DELETE_ALL
    };
}
