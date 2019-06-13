import React from 'react'
import PropTypes from 'prop-types';

class ChatWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' }
      ]
    };
  }

  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  render() {
    const user = this.props.user;
    const messages = this.state.messages;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === user.username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>

        <div>
          <form className="input-group">
            <input type="text" className="form-control" placeholder="Enter your message..." />
            <div className="input-group-append">
              <button className="btn submit-button" disabled={this.isDisabled()}>
                SEND
            </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired
};

export default ChatWindow;
