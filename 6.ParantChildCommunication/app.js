import React from "react";
import ReactDOM from "react-dom";
import Welcome from "./src/Welcome"
import Header from "./src/header"


class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        header : "Alert header"
      };
  }


  render() {
    return <div>
      <Welcome message = {this.showAlert} newHeader = {this.changeHeader}/>
      <Header headerTitle = {this.state.header}/>
    </div>;
  }

  showAlert = () => {
    alert("Handel Alert");
  }

  changeHeader = (newValue) => {
    this.setState ({
      header : newValue
    });
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById("contant")
);
