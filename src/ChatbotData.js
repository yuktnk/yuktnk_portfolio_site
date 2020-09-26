const ChatbotData = {
    "init": {
        answers: [
            {content: "どんな人なのか知りたい", nextId: "personal"},
            {content: "今後どんなエンジニアになりたいか知りたい", nextId: "vision"},
            {content: "学習内容(過去、現在、未来)について知りたい", nextId: "study"},
            {content: "SNSやGitHubを見てみたい", nextId: "sns"},
        ],
        question: "はじめまして。質問をして私のことをもっと知ってください！",
    },


    // どんな人なのか知りたい
    "personal": {
        answers: [
            {content: "好きな食べ物、嫌いな食べ物を教えて！", nextId: "food"},
            {content: "出身地はどこ？", nextId: "place"},
            {content: "短所と長所を教えて！", nextId: "feature"},
            {content: "趣味は？", nextId: "hobby"}
        ],
        question: "何について知りたいか選んでください！",
    },
    "food": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "personal"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "好きな食べ物は納豆です。年間400パックは食べています！\n嫌いな食べ物は特にありません。親の教育に感謝しています！",
    },
    "place": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "personal"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "岩手県宮古市です。海が綺麗なところで、浄土ヶ浜というところが有名な観光地です！",
    },
    "feature": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "personal"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "【長所】興味のあることや好きなことについて追求し、時間を忘れて取り組み、上達することが出来ることです！今までカメラ、楽器などいろいろなことに夢中になり上達してきました。現在はプログラミングに夢中です。\n【短所】長所の裏返しになりますが、夢中になり時間を忘れてしまうことがあります・・・。最近はその対策として、事前にやることの計画を立て、リスト化して取り組むようにしています。",
    },
    "hobby": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "personal"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "趣味はカメラ、ギター、プログラミングです。\n撮った写真はPHOTOSページに載せてあるよ！良かったら見てみてね！",
    },





    // 今後どんなエンジニアになりたいか知りたい
    "vision": {
        answers: [
            {content: "長期的には？", nextId: "longterm"},
            {content: "中期的には？", nextId: "middleterm"},
            {content: "短期的には？", nextId: "shortterm"},
            {content: "そもそもなんでエンジニアになりたい？", nextId: "why"},
        ],
        question: "何について知りたいか選んでください！",
    },
    "longterm": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "vision"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "カスタマーの問題をヒアリングし、解決や改善を一緒に行えるエンジニアになりたいです！\n顧客折衝など上流工程から関わりたいと考えています。",
    },
    "middleterm": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "vision"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "フルスタックエンジニアになりたいです！\n上流工程から関った上で顧客の問題を解決するためには、フロントエンド、サーバーサイド、インフラなどの幅広い知見と経験が必要だと考えるからです。",
    },
    "shortterm": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "vision"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "コードをたくさん書き、社内で戦力になりたいです！\n\nまずはひとつの分野（フロントエンド）のスペシャリストになることを目指して、日々学習に取り組んでいます。",
    },
    "why": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "vision"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "プログラミングに関心を持ったきっかけは、前職で使用していた注文管理や在庫管理を行うシステムに不具合が多く、「これを改善できたらもっと業務の効率が上がるのに」「もっとこういう機能があったら良いのに」と感じたことでした。具体的には、注文をいただいた商品を在庫と引き当てる処理にエラーが発生すること、注文を管理システムに取り込む際に毎回確認作業が発生すること、倉庫内の在庫とWebサイト上の在庫を連動することができないことなどです。以上のような問題点を発見したり、より良くなるアイデアが思いたりするものの、自分の力でシステムの改善をすることができず、とてももどかしい気持ちで働いていました。現在は自分の中にある「何かを改善するためのアイデア」を実際に形にするための手段として、プログラミング学習に励んでいます。",
    },





    // これまでの学習内容、現在の学習内容を知りたい
    "study": {
        answers: [
            {content: "スクールでは何を学習したの？", nextId: "school"},
            {content: "スクールに入る前は？", nextId: "past"},
            {content: "今はどんなことを勉強してる？", nextId: "now"},
            {content: "今後チャレンジしてみたいことは？", nextId: "future"},
        ],
        question: "何について知りたいか選んでください！",
    },
    "school": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "study"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "Haml・SCSS・Ruby・Ruby on Rails・JS・jQuery・GitHub・AWSなどの技術を用いた複合的機能の企画・実装をしました！特にチーム開発では技術以外のことも学んで、良い経験になりました。",
    },
    "past": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "study"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "前職がECサイトを運営する会社ということもあって、サイトの運営、Webデザインやバナー作成をやっていました！スクールに入る前はネットワーク基礎やRubyなどについて学習をしていました。",
    },
    "now": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "study"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "以前から興味のあったReactについて学習をしています。このポートフォリオもReactを用いて作成しました！",
    },
    "future": {
        answers: [
            {content: "ひとつ前の質問に戻る", nextId: "study"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "React関係の技術（Redux,Hooks,Next.js）や、TypeScript、Firebase、AWSなどに興味があります。まずはネットワークの基礎について学習したいです。",
    },





    "sns": {
        answers: [
            {content: "GitHubはこちら", nextId: "https://github.com/yuktnk"},
            {content: "Twitterはこちら", nextId: "https://twitter.com/cntx_planar50"},
            {content: "問い合わせる", nextId: "contact"},
            {content: "最初の質問に戻る", nextId: "init"}
        ],
        question: "下から選んでください！（別タブで開きます）",
    },
}

export default ChatbotData