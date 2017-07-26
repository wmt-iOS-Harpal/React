import React from "react";

export default class Welcome extends React.Component {

constructor (props) {
    super(props);

    this.state = {
      header : "Header changed"
    };
  }

  setHeader = () => {
    this.props.newHeader(this.state.header);
  }


  render() {
    return <div>
    <button onClick = {this.props.message}>Press me</button>
    <button onClick = {this.setHeader}>Change Header</button>
    </div>;
  }


}
