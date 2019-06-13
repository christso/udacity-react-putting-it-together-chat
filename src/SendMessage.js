import React from 'react';
import PropTypes from 'prop-types';

class SendMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
  }

  isDisabled = () => {
    return false;
  };

  handleMessageSend = e => {
    e.preventDefault();
    this.props.onMessageSend(this.props.user, this.state.message);
  }

  handleMessageInputChange = e => {
    const value = e.target.value;
    this.setState(() => ({message: value}));
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleMessageSend}>
          <input type="text" placeholder="Enter your message..." 
            value={this.state.message}
            onChange={this.handleMessageInputChange} />
          <div className="input-group-append">
            <button className="btn submit-button" onClick={this.handleMessageSend} disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SendMessage.propTypes = {
  user: PropTypes.object.isRequired,
  onMessageSend: PropTypes.func.isRequired
};

export default SendMessage;