import React from 'react';
import { Detail } from './index.js';
import { ChatBot } from './ChatBots/index.js';

const About = () => {
  return (
    <>
      <h4 className="content-title">- 私について -</h4>
      <div className="about">

        <Detail />
        <ChatBot />
      </div>
    </>
  )
}

export default About