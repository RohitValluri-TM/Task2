import { useState } from "react";

export default function MyComponent () {
    const [message] = useState("Welcome to Techmojo!")
    return (
        <div className="App">
        <h1>{message}</h1>
        </div>
    );
   }
   