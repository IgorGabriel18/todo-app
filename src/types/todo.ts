export interface ITodo {
    id: number;
    date: string;
    description: string;
    done: boolean;
}

export interface ITodoState {
    todos: ITodo[];
}
