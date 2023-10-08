import React from 'react';
import ReactDom from 'react-dom/client';

const parent = React.createElement("div", {id: "parent"}, "testttttting")


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent)