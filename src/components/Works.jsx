import React, { Component } from 'react'
import { Piece } from './index';

// 使用する画像のインポート
import Furima from '../assets/img/furima.png'
import Camecomu from '../assets/img/camecomu.png'
import Portfolio from '../assets/img/portfolio.png'


export default class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Title",
      content: "text text text text text text ",
    }
  }
  render() {
    return (
      <div className="skill-cards">
        <Piece title="ポートフォリオ" content="このアプリケーションです。" image={Portfolio}/>
        <Piece title="カメコミュ" content="カメラ好きのためのコミュニケーションサイト" image={Camecomu}/>
        <Piece title="FURIMA" content="チームでアジャイル開発を行いました" image={Furima}/>
      </div>
    )
  }
}
