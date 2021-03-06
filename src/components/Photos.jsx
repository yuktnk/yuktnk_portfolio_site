import React from 'react';
import { DetailWorkPhoto } from './index';

// 使用する画像のインポート
import Eremophilanivea from '../assets/img/bgi.jpg'
import Hanabi from '../assets/img/hanabi.jpg';
import Girl from '../assets/img/girl.jpg';
import Higanbana from '../assets/img/higanbana.jpg';
import Uncle from '../assets/img/uncle.jpg';
import Cat from '../assets/img/cat.jpg';

export default class Photos extends React.Component {
  render() {
    return (
      <div>
        <h4 className="content-title">- 趣味で撮影した写真 -</h4>
        <div className="flexbox">
          <DetailWorkPhoto title="エレモフィラ・ニベア" content="埼玉県大宮市で撮影" image={Eremophilanivea}/>
          <DetailWorkPhoto title="戸田橋花火大会" content="写真コンクールでグランプリを獲得" image={Hanabi}/>
          <DetailWorkPhoto title="少女" content="私の地元岩手県宮古市で撮影" image={Girl}/>
          <DetailWorkPhoto title="彼岸花" content="埼玉県幸手市で撮影" image={Higanbana}/>
          <DetailWorkPhoto title="川下りの船長さん" content="山形県最上川で撮影" image={Uncle}/>
          <DetailWorkPhoto title="猫ちゃん" content="かわいい声で鳴きます" image={Cat}/>
        </div>
      </div>
    )
  }
}