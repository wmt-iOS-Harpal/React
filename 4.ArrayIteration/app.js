import React from "react";
import ReactDOM from "react-dom";
import ArrayList from "./src/arrayList"


class App extends React.Component {

  render() {
    return <ArrayList/>;
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("contant")
);
