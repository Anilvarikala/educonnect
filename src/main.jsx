import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthProvider } from "./Components/Context.jsx";
import App1 from "./App.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";
createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AuthProvider>
      {/* <ProtectedRoute><App1 />
      </ProtectedRoute> */}
      <App1 />
    
    </AuthProvider>
  </HashRouter>
);
