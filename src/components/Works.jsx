import React, { Component } from 'react'
import { Piece } from './index';

// 使用する画像のインポート
import Furima from '../assets/img/furima.jpg'
import Camecomu from '../assets/img/camecomu.jpg'
import Portfolio from '../assets/img/portfolio.jpg'
import Chatspace from '../assets/img/chatspace.png'


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
      <div>
        <h4 className="subtitle">- 制作物 -</h4>
        <div className="flexbox">
          <Piece title="ポートフォリオ" content="このアプリケーションです。" image={Portfolio}/>
          <Piece title="カメコミュ" content="カメラ好きのためのコミュニケーションサイト" image={Camecomu}/>
          <Piece title="FURIMA" content="チームでアジャイル開発を行いました" image={Furima}/>
          <Piece title="Chat-Space" content="Ruby on Railsでチャットアプリの作成をしました" image={Chatspace}/>
        </div>
      </div>
    )
  }
}
