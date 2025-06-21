import React from "react";
import { createRoot } from "react-dom/client";

function Animal({name, type, age}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Typ: {type}</p>
            <p>Věk: {age} let</p>
        </div>
    )
}

function App() {
    return (
        <>
            <Animal name='Žofka' type="žirafa" age={23} />
            <Animal name='Dorča' type="pes" age={7} />
        </>
    )
}

/**
 * Do not modify the code below!
 */
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
