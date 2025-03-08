import { createRoot } from "react-dom/client";
import App from "./components/App/App.jsx";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

createRoot(document.getElementById("root")).render(<App />);

// Service Worker-ni ro'yxatdan o'tkazish
serviceWorkerRegistration.register();
