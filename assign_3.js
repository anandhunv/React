import React from "react";
import ReactDom from "react-dom/client"


//create nested header element using React.createElement(h1,h2,h3)


const reactCreateElement = React.createElement("div",{className:"title"},[
    React.createElement("h1",{key:"h1"},"firs head"),
    React.createElement("h2",{key:"h2"},"second head"),
    React.createElement("h3",{key:"h3"},"Third Head")
]);       
                    

//create same element using jsx

const jsxCreateElement = (
    <div className="title">
        <h1 id="one">First head jsx</h1>
        <h2 id="two">Second head jsx</h2>
        <h3 id="three">Third head jsx</h3>


    </div> 
)

//create a functional component of same with jsx

const FunctionalComponent=()=>jsxCreateElement


//composition of component

const Composition = ()=>(
    <div id="composition">
        <h1>This headings are  inside another components</h1>
        <FunctionalComponent />
    </div>
)

const root=ReactDom.createRoot(document.getElementById("root"))
const rootJsx=ReactDom.createRoot(document.getElementById("rootJsx"))
const rootComponent=ReactDom.createRoot(document.getElementById("rootComponent"))
const rootComposition=ReactDom.createRoot(document.getElementById("rootComposition"))




root.render(reactCreateElement);
rootJsx.render(jsxCreateElement);
rootComponent.render(<FunctionalComponent/>)
rootComposition.render(<Composition />)

