import React from "react";
import ReactDOM from "react-dom";
import Demo from "./src/demo";
import TextField from "./src/textField"
import Label from "./src/label"

class App extends React.Component {

  render() {
    return <div>
    First Name:<br/>
    <TextField/>
    <br/>
    Last name:<br/>
    <TextField/>
    <br/><br/>
    </div>;
  }
}

// ReactDom.render(
//   <Demo/>,
//   document.getElementById('header')
// );

// ReactDom.render(
//   <Label/>,
//   document.getElementById('lblFastname')
// );
// ReactDom.render(
//   <Label/>,
//   document.getElementById('lblLastname')
// );

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
