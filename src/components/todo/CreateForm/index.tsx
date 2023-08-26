import { Plus } from "phosphor-react";

import { useTodo } from "~hooks/useTodo";

import "./styles.scss";

export function CreateForm() {
    const { handleSubmit, register, errors, onCreateSubmit } = useTodo();

    return (
        <form
            onSubmit={handleSubmit(onCreateSubmit)}
            className="create-form"
        >
            <input
                type="text"
                spellCheck="false"
                autoComplete="off"
                placeholder="What do you want to do?"
                {...register("description")}
                className="create-form__input"
            />
            <button
                type="submit"
                className="create-form__button"
            >
                <Plus className="create-form__icon" />
            </button>
            {errors.description && <p className="create-form__error">{errors.description.message}</p>}
        </form>
    );
}
