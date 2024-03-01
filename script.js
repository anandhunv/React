
// const root=document.getElementById("root");
// const heading=document.createElement("h1");
// heading.innerHTML="Hello world";
// root.appendChild(heading);
import React from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1",{},"Hello World From React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)