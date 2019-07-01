import React from 'react';
import Words from './words.js';
import Form from './form.js';

import './design/app.scss';

import ChatContext from './context/chat-context';

class App extends React.Component {
  render() {
    return (
      <div id="chat">
        <ChatContext>
          <Words />
          <Form />
        </ChatContext>
      </div>
    );
  }
}

export default App;
