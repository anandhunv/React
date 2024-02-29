//nested html structure in react

// const parent=React.createElement(
                    
//                     "div",
//                     {id:"parent"},
//                     React.createElement(
//                         "div",
//                         {id:"child"},
//                         React.createElement(
//                             "h1",
//                             {},
//                             "hey im the h1 tag"
//                         )

//                     ) )
//                     const root=ReactDOM.createRoot(document.getElementById("root"));
//                     root.render(parent)




//more than one childrens or sibblings


// const parent=React.createElement(
                    
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//         {id:"child"},
//        [ React.createElement(
//             "h1",
//             {},
//             "hey im the h1 tag"
//         ),React.createElement(
//             "h2",
//             {},
//             "hey im the h2 tag"
//         ) ]

//     ) )
//     const root=ReactDOM.createRoot(document.getElementById("root"));
//     root.render(parent)


//more complex structure


const parent=React.createElement(
    "div",
    {id:"parent"},
  [ React.createElement(
        "div",
        {id:"child"},
      [  React.createElement(
            "h1",
            {},
            "h1"
        ), React.createElement(
            "h2",
            {},
            "h2"
        )]
    ), React.createElement(
        "div",
        {id:"child2"},
      [  React.createElement(
            "h1",
            {},
            "h1"
        ), React.createElement(
            "h2",
            {},
            "h2"
        )]
    )]

)

const root=ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent)
