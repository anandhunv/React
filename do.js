import React from "react";
import  ReactDOM  from "react-dom/client";

//react element
const jsxHead = <h1>React element with varaibale name jsxHead</h1>;

//react component

const HeadComponent=()=>(
    <div>{jsxHead}
    <h1>Head component first sentance</h1>
    </div>
)

const SecondComponent=()=>(    <div>

    {HeadComponent}
    {console.log({HeadComponent})}
    <h1>Head component last sentance</h1>
    </div>


)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHead);
root.render(<SecondComponent />)
