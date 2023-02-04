import { ITodoAction, ITodoState } from "../../types";
import { CREATE, TOGGLE_DONE, EDIT, DELETE_SELECTED, DELETE_ALL } from "../actions/types";

const INITIAL_STATE: ITodoState = {
    tasks: []
};

export function todosReducer(state = INITIAL_STATE, action: ITodoAction) {
    switch (action.type) {
        case CREATE: {
            return {
                ...state,
                tasks: [action.payload, ...state.tasks]
            };
        }
        case TOGGLE_DONE: {
            return {
                tasks: [
                    ...state.tasks.map((item) => (item.id === action.payload.id ? { ...item, done: !item.done } : item))
                ]
            };
        }
        case EDIT: {
            return {
                tasks: [
                    ...state.tasks.map((item) =>
                        item.id === action.payload.id ? { ...item, content: action.payload.content } : item
                    )
                ]
            };
        }
        case DELETE_SELECTED: {
            return {
                tasks: [...state.tasks.filter((item) => item.id !== action.payload.id)]
            };
        }
        case DELETE_ALL: {
            return { tasks: [] };
        }
        default: {
            return state;
        }
    }
}
