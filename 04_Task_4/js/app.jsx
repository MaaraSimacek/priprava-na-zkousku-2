import React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <h1>Jsem App</h1>
}



/**
 * Do not modify the code below!
 */
 const container = document.getElementById("app");
 const root = createRoot(container);
 root.render(<App />);