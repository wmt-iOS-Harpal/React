import React from "react";


export default class HelloWorld extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      message1 : props.message,
      age1 : props.age,
      email : "harpal@gmail.com"
    };
  }

// changeEmail(event) {
//   //alert("Button Clicked");
//   this.setState({
//     email : "xyz@gmail.com"
//   });
// }

changeEmail = () => {
  this.setState({
    email : "iOS4@gmail.com"
  });
}

  render() {



    return <div>
           <p> Message = {this.state.message1}</p>
           <p>age = {this.state.age1}</p>
          <p>age = {this.state.email}</p>
          <button onClick = {this.changeEmail.bind(this)}>Change email</button>

           </div>;

  }



}
