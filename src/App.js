import React from "react";
import ReactDOM from "react-dom/client";

import AppLayout from "./AppLayout";
//JSX
//react element
// const heading1 = <h1>Heading1</h1>;
// const heading2 = <h2>Heading2</h2>;
// const div = (
//   <>
//     {heading1}
//     {heading2}
//   </>
// );
//functional component
const App = () => {
  return (
    <React.Fragment>
      <AppLayout />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
