import { useState } from "react";

export const useVisibility = () => {
    const [visibility, setVisibility] = useState<boolean>(false);

    const handleClickToggleVisibility = () => setVisibility(!visibility);

    return { visibility, handleClickToggleVisibility };
};
