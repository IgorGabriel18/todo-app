import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import { create, toggleDone, deleteSelected, deleteAll } from "~store/slice/todoSlice";
import { RootState } from "~store/store";
import { ITodo } from "~types/todo";
import { formatDate, generateRandomID } from "~utils/helpers";

interface IValidation {
    description: string;
}

const validationSchema = yup.object().shape({
    description: yup.string().required("Description is required!")
});

export const useTodo = () => {
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IValidation>({
        resolver: yupResolver(validationSchema)
    });

    const todos = useSelector((state: RootState) => state.todos.todos);
    const handleClickToggleDone = (id: number) => dispatch(toggleDone(id));
    const handleClickDeleteSelected = (id: number) => dispatch(deleteSelected(id));
    const handleClickDeleteAll = () => dispatch(deleteAll());
    const onCreateSubmit = ({ description }: IValidation) => {
        const newTodo: ITodo = {
            id: generateRandomID(),
            date: formatDate(),
            description: description,
            done: false
        };
        dispatch(create(newTodo));
        reset();
    };

    return {
        handleSubmit,
        register,
        errors,
        todos,
        onCreateSubmit,
        handleClickToggleDone,
        handleClickDeleteSelected,
        handleClickDeleteAll
    };
};
