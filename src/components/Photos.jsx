import React from 'react';
import { Piece, Photo } from './index';


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
      title: "",
      content: "",
      image: "",
    }
  }
  

  render() {
    return (
      <div>
        <h4 className="subtitle">- 趣味で撮影した写真たち -</h4>
        <div className="flexbox">
          <Photo title="エレモフィラ・ニベア" content="埼玉県大宮市で撮影" image={Eremophilanivea}/>
          <Photo title="戸田橋花火大会" content="写真コンクールでグランプリを獲得" image={Hanabi}/>
          <Photo title="少女" content="私の地元岩手県宮古市で撮影" image={Girl}/>
          <Photo title="彼岸花" content="埼玉県幸手市で撮影" image={Higanbana}/>
          <Photo title="川下りの船長さん" content="山形県最上川で撮影" image={Uncle}/>
          <Photo title="猫ちゃん" content="かわいい声で鳴きます" image={Cat}/>
        </div>
      </div>
    )
  }
}