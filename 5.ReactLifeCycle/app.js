import React from "react";
import ReactDOM from "react-dom";
import Counter from "./src/counter"


class App extends React.Component {

  render() {
    return <Counter title = "Default title"/>;
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("contant")
);
