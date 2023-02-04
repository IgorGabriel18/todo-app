export interface ITask {
    id: number;
    content: string;
    done: boolean;
}

export interface ITodoState {
    tasks: ITask[];
}

export interface ITodoAction {
    type: string;
    payload: ITask;
}
