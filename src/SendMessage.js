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

  handleSubmit = e => {
    e.preventDefault();
    this.props.onMessageSend(this.state.message);
  }

  handleInputChange = e => {
    const value = e.target.value;
    this.setState(() => ({message: value}));
  }

  render() {
    return (
      <div>
        <form className="input-group" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter your message..." 
            value={this.state.message}
            onChange={this.handleInputChange} />
          <div className="input-group-append">
            <button className="btn submit-button" onClick={this.handleSubmit} disabled={this.isDisabled()}>
              SEND
            </button>
          </div>
        </form>
      </div>
    );
  }
}

SendMessage.propTypes = {
  onMessageSend: PropTypes.func.isRequired
};

export default SendMessage;