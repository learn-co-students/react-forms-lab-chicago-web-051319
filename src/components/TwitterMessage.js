import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: "",
    };
  }

 handleInput = (e) =>{
   let input = e.target.value
   this.setState({
     value: input
   })
 }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={(e)=>this.handleInput(e)}
        value={this.state.value}/>
        {this.props.maxChars-this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
