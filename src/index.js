// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./app";
// import "./styles/styles.css";

// ReactDOM.render(<App />, document.getElementById("root"));
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/styles.css";

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root and render the App component
const root = createRoot(rootElement);
root.render(<App />);
