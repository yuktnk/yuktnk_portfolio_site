import React from 'react';
import { Piece } from './index';

// 使用する画像のインポート
import Eremophilanivea from '../assets/img/bgi.jpg'
import Hanabi from '../assets/img/hanabi.jpg';
import Girl from '../assets/img/girl.jpg';
import Higanbana from '../assets/img/higanbana.jpg';
import Uncle from '../assets/img/uncle.jpg';
import Cat from '../assets/img/cat.jpg';


export default class Photos extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Title",
      content: "text text text text text text ",
      image: Eremophilanivea,
    }
  }
  

  render() {
    return (
      <div className="skill-cards">
        <Piece title={this.state.title} content={this.state.content} image={Eremophilanivea}/>
        <Piece title={this.state.title} content={this.state.content} image={Hanabi}/>
        <Piece title={this.state.title} content={this.state.content} image={Girl}/>
        <Piece title={this.state.title} content={this.state.content} image={Higanbana}/>
        <Piece title={this.state.title} content={this.state.content} image={Uncle}/>
        <Piece title={this.state.title} content={this.state.content} image={Cat}/>
      </div>
    )
  }
}