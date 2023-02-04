import { Provider } from "react-redux";

import { AppLayout } from "./components/AppLayout";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { store } from "./store";
import "./styles/GlobalStyles.scss";

export function App() {
    return (
        <Provider store={store}>
            <AppLayout>
                <Header />
                <Main />
            </AppLayout>
        </Provider>
    );
}
