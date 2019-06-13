import React from 'react'
import PropTypes from 'prop-types';
import MessageList from './MessageList';
import SendMessage from './SendMessage';

class ChatWindow extends React.Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return false;
  };

  handleMessageSend = (message) => {
    this.props.onMessageSend(this.props.user, message);
  }

  render() {
    const user = this.props.user;
    const messages = this.props.messages;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>

        <MessageList messages={messages} user={user} />
        <SendMessage onMessageSend={this.handleMessageSend} />
      </div>

    );
  }
}

ChatWindow.propTypes = {
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  onMessageSend: PropTypes.func.isRequired
};

export default ChatWindow;

