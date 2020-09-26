import React from 'react'

const Detail = () => {
  return (
    <div className="detail">
      <div>
        <h4>- 挨拶 -</h4>
        <p className="detail-font">　ご覧くださいましてありがとうございます。<br/>
          <br/>　このサイトは転職活動のためのポートフォリオとして、現在学習中のReactで作成しました。</p>
      </div>
      <div>
        <h4>- なぜエンジニアになりたいと思ったか -</h4>
        <p className="detail-font">
        　プログラミングに関心を持ったきっかけは、前職で使用していた注文管理や在庫管理を行うシステムに不具合が多く、「これを改善できたらもっと業務の効率が上がるのに」「もっとこういう機能があったら良いのに」と感じたことでした。<br/><br/>
        　具体的には、注文をいただいた商品を在庫と引き当てる処理にエラーが発生すること、注文を管理システムに取り込む際に毎回確認作業が発生すること、倉庫内の在庫とWebサイト上の在庫を連動することができないことなどです。<br/><br/>
        　以上のような問題点を発見したり、より良くなるアイデアが思いたりするものの、自分の力でシステムの改善をすることができず、とてももどかしい気持ちで働いていました。<br/><br/>
        　現在は自分の中にある「何かを改善するためのアイデア」を実際に形にするための手段として、プログラミング学習に励んでいます。</p>
      </div>
      
      <div>
        <h4>- 略歴 -</h4>
        <p className="career">
        2016.03 - 2020.06　株式会社 ASJコマース 副主任<br/>
        2020.06 - 2020.08　TECH::CAMPにてプログラミング学習<br/>
        2020.09 -　　　　　学習を継続しつつ、転職活動中
        </p>
      </div>
    </div>
  )
}

export default Detail
