import React from 'react';
import { Detail } from './index.js';
import { ChatBot } from './ChatBots/index.js';

const About = () => {
  return (
    <div className="about">
      <Detail />
      <ChatBot />
    </div>
  )
}

export default About