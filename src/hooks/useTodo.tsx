import { useDispatch, useSelector } from "react-redux";

import { create, toggleDone, edit, deleteSelected, deleteAll } from "../store/actions";
import { ITodoState, ITask } from "../types";

export const useTodo = () => {
    const dispatch = useDispatch();

    const todo = useSelector((state: ITodoState) => state.tasks);
    const createTask = (task: ITask) => dispatch(create(task));
    const toggleDoneTask = (id: number) => dispatch(toggleDone(id));
    const editTask = (id: number, content: string) => dispatch(edit(id, content));
    const deleteSelectedTask = (id: number) => dispatch(deleteSelected(id));
    const deleteAllTasks = () => dispatch(deleteAll());

    return { todo, createTask, toggleDoneTask, editTask, deleteSelectedTask, deleteAllTasks };
};
