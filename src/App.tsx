import { Footer } from "~components/Footer";
import { Header } from "~components/Header";
import { Content } from "~components/todo/Content";
import { CreateForm } from "~components/todo/CreateForm";
import "~styles/globalStyles.scss";

export function App() {
    return (
        <>
            <Header />
            <CreateForm />
            <Content />
            <Footer />
        </>
    );
}
