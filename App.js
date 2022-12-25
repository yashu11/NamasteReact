const heading=React.createElement("h1",{id:"title",className:"class"},"Heading1")
const heading2=React.createElement("h2",{id:"title",className:"class"},"Heading2")
const div=React.createElement("div",{id:"container"},[heading,heading2])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(div);