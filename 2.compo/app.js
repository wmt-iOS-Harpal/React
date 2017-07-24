import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./src/helloWorld"

class App extends React.Component {

  render() {
    return <div><HelloWorld message = "Hello Harpal..!! Props" age = "256"/></div>;
  }

}


ReactDOM.render(
  <App/>,
  document.getElementById('helloworld')
);
