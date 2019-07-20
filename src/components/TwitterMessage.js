import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={message} onChange={(e)=> {this.handleChange(e)}}/>
        <br/>
        <p>You have {140 - (message.length)} characters remaining.</p>
      </div>
    );
  }
}

export default TwitterMessage;
