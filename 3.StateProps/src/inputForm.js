import React from "react";

export default class InputForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        stringText : this.props.stringText,
        bufferValue : ""
      };
    }

buttonClick = (event) => {
  let buffer = this.state.bufferValue
  this.setState({
    stringText : buffer
  });
}

updateInputValue = (event) => {
    this.setState({
      bufferValue : event.target.value
    });
  }

  render() {
    return <div>
      <input type = "text" id = "textBox" onChange={this.updateInputValue}></input>
      <br></br>
      <br></br>
      <br></br>

      <button onClick = {this.buttonClick}>Submit</button>
      <br></br>

      <p>{this.state.stringText}</p>
    </div>;
  }
}
