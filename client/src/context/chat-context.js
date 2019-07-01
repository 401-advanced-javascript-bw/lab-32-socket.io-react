import React from 'react';
import io from 'socket.io-client';

const url = 'http://localhost:3000';
const socket = io.connect(url);

export const ChatContext = React.createContext();

export default class ChatProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      typedInput: '',
      handleSubmit: this.handleSubmit,
      updateWords: this.updateWords,
      handleNewWords: this.handleNewWords,
    };
    socket.on('incoming', payload => this.updateWords(payload));
  }

  updateWords = words => {
    this.setState(state => ({ words: [...state.words, words] }));
  };

  handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    socket.emit('chat', this.state.typedInput);
  };

  handleNewWords = event => {
    this.setState({ typedInput: event.target.value });
  };

  render() {
    return (
      <ChatContext.Provider value={this.state}>
        {this.props.children}
      </ChatContext.Provider>
    );
  }
}
