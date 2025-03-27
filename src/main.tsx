import { BrowserRouter as Router } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "../libs/store";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
        <ToastContainer 
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    </StrictMode>
);
