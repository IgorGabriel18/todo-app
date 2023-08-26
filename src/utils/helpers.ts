export const generateRandomID = () => {
    return Math.floor(Math.random() * 100000);
};

export const formatDate = () => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, "0");
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const year = now.getFullYear();

    return `${day}/${month}/${year}`;
};
