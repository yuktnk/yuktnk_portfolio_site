import React, { Component } from 'react'
import { Modal } from './index';

// 使用する画像のインポート
import Furima from '../assets/img/furima.jpg'
import Camecomu from '../assets/img/camecomu.jpg'
import Portfolio from '../assets/img/portfolio.jpg'
import Chatspace from '../assets/img/chatspace.png'

// ポートフォリオの情報
const PfDesc =
"Reactの勉強のアウトプットとして作成しました\
Reactの勉強のアウトプットとして作成しました。\
Reactの勉強のアウトプットとして作成しました。\
Reactの勉強のアウトプットとして作成しました。"
const PfURL =
"https://github.com/yuktnk/yuktnk_portfolio_site"

// カメコミュの情報
const CcDesc =
"カメコミュの説明文"
const CcURL =
"https://github.com/yuktnk/my_first_app"

// フリマの情報
const FrmDesc =
"フリマの説明文"
const FrmURL =
"https://github.com/yuktnk/fleamarket_sample_80g"

// チャットスペースの情報
const CsDesc =
"チャットスペースの説明文"
const CsURL =
"https://github.com/yuktnk/chat-space"


export default class Works extends Component {
  render() {
    return (
      <div>
        <h4 className="subtitle">- 制作物 -</h4>
        <div className="flexbox">
          <Modal title="ポートフォリオ" content="このアプリケーションです。"
          image={Portfolio} description={PfDesc} url={PfURL} />

          <Modal title="カメコミュ" content="カメラ好きのためのコミュニケーションサイト"
          image={Camecomu} description={CcDesc} url={CcURL} />
          
          <Modal title="FURIMA" content="チームでアジャイル開発を行いました"
          image={Furima} description={FrmDesc} url={FrmURL} />
          
          <Modal title="Chat-Space" content="Ruby on Railsでチャットアプリの作成をしました"
          image={Chatspace} description={CsDesc} url={CsURL}/>
        </div>
      </div>
    )
  }
}
