import React, { Component } from 'react'
import { Modal } from './index';

// 使用する画像のインポート
import Furima from '../assets/img/furima.jpg'
import Camecomu from '../assets/img/camecomu.jpg'
import Portfolio from '../assets/img/portfolio.jpg'
import Chatspace from '../assets/img/chatspace.png'

// ポートフォリオの情報
const PfDesc =
"開発環境： React ／ Material-UI ／ GitHub ／ Firebase"
const PfURL =
"https://github.com/yuktnk/yuktnk_portfolio_site"

// カメコミュの情報
const CcDesc =
"開発環境： Haml & Scss ／ Ruby on Rails ／ jQuery ／ MySQL ／ GitHub ／ AWS(EC2,S3)"
const CcGitHubURL =
"https://github.com/yuktnk/my_first_app"
const CcURL =
"http://13.115.29.120/"

// フリマの情報
const FrmDesc =
"開発環境： Haml & Scss ／ Ruby on Rails ／ jQuery ／ MySQL ／ GitHub ／ AWS(EC2,S3) ／ Slack ／ Trello"
const FrmDesc2 =
"ログイン認証がございます。【ID：final_team_g ／ Pass：g_protein】"
const FrmGitHubURL =
"https://github.com/yuktnk/fleamarket_sample_80g"
const FrmURL =
"http://54.250.69.247"


// チャットスペースの情報
const CsDesc =
"開発環境： Haml & Scss ／ Ruby on Rails ／ jQuery ／ MySQL ／ GitHub "
const CsURL =
"https://github.com/yuktnk/chat-space"


export default class Works extends Component {
  render() {
    return (
      <div>
        <h4 className="content-title">- 制作物 （ぜひご覧ください！） -</h4>
        <div className="flexbox">
          <Modal title="ポートフォリオ" content="このアプリケーションです"
          image={Portfolio} description={PfDesc} GitHubUrl={PfURL} />

          <Modal title="カメコミュ｜カメラ好きのためのコミュニケーションサイト" content="オリジナルアプリです"
          image={Camecomu} description={CcDesc} GitHubUrl={CcGitHubURL} MyAppUrl={CcURL} />
          
          <Modal title="FURIMA" content="チームでアジャイル開発を行いました"
          image={Furima} description={FrmDesc} description2={FrmDesc2} GitHubUrl={FrmGitHubURL} MyAppUrl={FrmURL} />
          
          <Modal title="Chat-Space" content="Ruby on Railsでチャットアプリの作成をしました"
          image={Chatspace} description={CsDesc} GitHubUrl={CsURL}/>
        </div>
      </div>
    )
  }
}
