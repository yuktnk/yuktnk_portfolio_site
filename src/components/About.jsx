import React from 'react';
import { DetailMe } from './index.js';
import { ChatBot } from './ChatBots/index.js';

const About = () => {
  return (
    <>
      <h4 className="content-title">- 私について -</h4>
      <div className="about">
        <DetailMe />
        <ChatBot />
      </div>
    </>
  )
}

export default About