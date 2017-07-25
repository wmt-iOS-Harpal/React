import React from "react";

export default class Counter extends React.Component {


  constructor(props) {
      super(props);

      this.state = {
        title : "Constructor title",
        count : 0
      };
    }

    //Only once before render()
    componentWillMount() {
      let title;
      if (this.state.count > 0) {
        title = "Counter in possitive"
      }
      else if (this.state.count < 0) {
        title = "Counter in nagative"
      }
      else {
        title = "Counter is zero"
      }

      this.setState({
        title : title
      });
    }


    componentWillReceiveProps(nextProps) {
      console.log(nextProps);
    }

    //if components state and props are change immidiately that method is called
    //if that methos return false than layout is not update
    shouldComponentUpdate(nextProps, nextState) {
      console.log("shouldComponentUpdate");
      let title;
      if (nextState.count > 0) {
        title = "Counter in possitive"
      }
      else if (nextState.count < 0) {
        title = "Counter in nagative"
      }
      else {
        title = "Counter is zero"
      }

      this.setState({
        title : title
      });
      return !(this.state.count == nextState.count)
    }

    //if shouldComponentUpdate return false componentWillUpdate could not fire
    componentWillUpdate(nextProps, nextState) {
      console.log("componentWillUpdate");

    }

    //if shouldComponentUpdate return false componentDidUpdate could not fire
    componentDidUpdate(prevProps, prevState) {
      console.log("componentDidUpdate");
    }

    //Do clean up stuff hear
    componentWillUnmount() {
      console.log("componentWillUnmount");
    }


    handleIncrement = () => {
        var newCount = this.state.count + 1;
        this.setState({count: newCount});
    }

    handleDecrement = () => {
        var newCount = this.state.count - 1;
        this.setState({count: newCount});
    }

    // propTypes: {
    //     title: React.PropTypes.string
    // }


  render() {
    return <div>
        <h1>{this.state.title}</h1>
        <div>{this.state.count}</div>
        <input type='button' value='+' onClick={this.handleIncrement}></input>
        <input type='button' value='-' onClick={this.handleDecrement}></input>
      </div>;
  }
}
