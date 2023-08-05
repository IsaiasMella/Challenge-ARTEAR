import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { MainLayout } from "./Components/Layouts";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainLayout>
    <App />
  </MainLayout>
);
