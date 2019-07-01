import React, { useContext } from 'react';
import { ChatContext } from './context/chat-context';

export default function usechat() {
  const context = useContext(ChatContext);
  return context;
}
