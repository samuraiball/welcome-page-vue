<template>
  <div class="profile">
    <Icon/>
    <SectionTitle class="section-title">About Me</SectionTitle>
    <div class="content">
      <p>
        名前：ヒロオカ
      </p>
      <p>
        ユーザベースのソフトウェアエンジニア<br/>
        Java(エコシステム含む), Linux, Vim, コンテナ技術, アジャイル開発あたりに興味があります。<br/>
      </p>
    </div>

    <SectionTitle class="section-title">About This Site</SectionTitle>
    <div class="content">
      <p>
        このサイトは、私がCSSやフロントエンドの勉強のために作っています。<br/>
        以下の技術スタックや設計手法を使って、作成してます。
      </p>
      <ul>
        <li>Vue.js</li>
        <li>Typescript</li>
        <li>Atomic Design</li>
      </ul>
      <p>
        すべて生のCSSで作っていて、CSSフレームワークやコンポーネントフレームワークは使っていません。<br/>
      </p>
    </div>

    <SectionTitle class="section-title">Links</SectionTitle>
    <div class="content">
      <Link src="https://twitter.com/yuya_hirooka">Twitter</Link>
      <Link src="https://github.com/samuraiball">GitHub</Link>
      <Link src="https://yuya-hirooka.hatenablog.com/">はてなブログ</Link>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/composition-api";
import Icon from "@/components/molecules/Icon.vue";
import SectionTitle from "@/components/molecules/SectionTitle.vue";
import Link from "@/components/molecules/Link.vue";

export default defineComponent({
  name: 'Profile',
  components: {Link, SectionTitle, Icon},
  props: {
    message: String
  }
})
</script>

<style scoped>
.profile {
  margin-top: 10px;
  margin-bottom: 30px;
}

.section-title {
  margin-top: 10px;
}
.content {
  margin-left: 10px;
}
</style>