import React, { useContext } from 'react';

import { ChatContext } from './context/chat-context';

const Words = () => {
  let context = useContext(ChatContext);

  let words = [];

  context.words.map(word => {
    words.push(<h2>{word}</h2>);
  });

  return (
    <>
      <div>{words}</div>
    </>
  );
};

export default Words;
