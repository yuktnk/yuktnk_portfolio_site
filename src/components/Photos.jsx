import React from 'react';
import { Piece } from './index';
import Eremophilanivea from '../assets/img/bgi.jpg'
import Hanabi from '../assets/img/hanabi.jpg';
import Girl from '../assets/img/girl.jpg';
import Higanbana from '../assets/img/higanbana.jpg';


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
        <Piece title={this.state.title} content={this.state.content} image={this.state.image}/>
        <Piece title={this.state.title} content={this.state.content} image={this.state.image}/>
        <Piece title={this.state.title} content={this.state.content} image={this.state.image}/>
        <Piece title={this.state.title} content={this.state.content} image={this.state.image}/>
        <Piece title={this.state.title} content={this.state.content} image={this.state.image}/>
      </div>
    )
  }
}