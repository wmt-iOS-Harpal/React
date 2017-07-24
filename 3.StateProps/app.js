import React from "react";
import ReactDOM from "react-dom";
import InputForm from "./src/inputForm"


class App extends React.Component {

  render() {
    return <div><InputForm stringText = "Temp message"/></div>;
  }


}


ReactDOM.render(
  <App/>,
  document.getElementById("contant")
);
