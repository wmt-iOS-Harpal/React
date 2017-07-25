import React from "react";

export default class ArrayList extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        numbers : [1, 2, 3, 4, 5],
        bufferValue : ""
      };
    }

  addNo = (event) => {

    if (this.state.bufferValue != "") {
      this.state.numbers.push(this.state.bufferValue);
      this.setState({
        numbers : this.state.numbers,
        bufferValue : ""
      });
    }
    else {
      alert("No is required");
    }
  }

  removeNo = (event) => {
    this.state.numbers.splice(0, 1);
    this.setState({
      numbers : this.state.numbers,
    });
  }

  updateInputValue = (event) => {
    this.setState({
      bufferValue : event.target.value
    });
  }

  render() {
    let listItem = this.state.numbers.map((number, index) =>
      <li key={index}>
        {number}
      </li>
    );

    const isEnable = this.state.bufferValue !== ""

    return <div>
    <input type = "number" id = "textBox" onChange={this.updateInputValue} value = {this.state.bufferValue}></input>
      <ul>
        {listItem}
      </ul>
      <button onClick = {this.addNo} disabled = {!isEnable}>Add</button><button onClick = {this.removeNo}>Remove</button>
    </div>;
  }


}
