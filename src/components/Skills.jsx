import React from 'react';
import { Skill } from './index.js'




export default function Skills() {


  return (
    <div className="skills">
      <h4 className="content-title">- 経験したことのある技術 -</h4>
      <div className="flexbox">
        <Skill field="フロントエンド" title="Haml & Scss" />
        <Skill field="フロントエンド" title="JavaScript" />
        <Skill field="フロントエンド" title="jQuery" />
        <Skill field="フロントエンド" title="React" />
        <Skill field="フロントエンド" title="Material-UI" />
        <Skill field="サーバーサイド" title="Ruby" />
        <Skill field="サーバーサイド" title="Ruby on Rails" />
        <Skill field="バージョン管理" title="GitHub" />
        <Skill field="クラウドコンピューティング" title="AWS" />
        <Skill field="クラウドコンピューティング" title="Firebase" />
        <Skill field="画像編集" title="Pixelmator" />
        <Skill field="画像編集" title="Lightroom" />
      </div>
    </div>
  );
}