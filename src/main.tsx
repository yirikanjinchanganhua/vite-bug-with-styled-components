import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import Store from "./models/Store";

const store = new Store();
(window as any).store = store;

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById("root"),
// );
