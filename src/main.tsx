import { createRoot } from 'react-dom/client'
import App from './ToDoApp.tsx'
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>
)