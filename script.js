import React from "react";
import ReactDOM from "react-dom/client";
const heading=React.createElement("h1",{},"this is heading");
console.log(heading);

//Jsx => Babel transpiles it to React.createElement =>React Element-object =>Html(render)
const elem=<span>React element </span>
const jsxHead=(<marquee>
    {elem}Jsx using h1 tag</marquee>)//react element

//functional component
const Title=function(){return(
    <h1 className="card" id="unique">Exploring  React</h1>
)}
const string= "i love React more than "
const HeadComponent=()=>(<div>
    <Title/>
  { console.log({Title})}
    <h2>{string}{100+100+"%"}{console.log(string) }</h2>
   <h1>{jsxHead}</h1> 
    <p className="card" id="unique">React Functional component</p>
</div>)
console.log(jsxHead);

const example = (
    <h1>Component inside element
        <HeadComponent/>
    </h1>
)


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHead)
// root.render(heading)
root.render(<HeadComponent/>);
root.render(example)




