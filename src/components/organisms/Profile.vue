<template>
  <div class="profile">
    <Icon/>
    <SectionTitle class="section-title">About Me</SectionTitle>
    <div class="section-content">
      <p>
        名前：ヒロオカ
      </p>
      <p>
        ユーザベースのソフトウェアエンジニア<br/>
        Java(エコシステム含む), Linux, Vim, コンテナ技術, アジャイル開発あたりに興味があります。<br/>
      </p>
    </div>

    <SectionTitle class="section-title">About This Site</SectionTitle>
    <div class="section-content">
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
    <div class="section-content">
      <Link src="https://twitter.com/yuya_hirooka">Twitter</Link>
      <Link src="https://github.com/samuraiball">GitHub</Link>
      <Link src="https://yuya-hirooka.hatenablog.com/">はてなブログ</Link>
    </div>

    <SectionTitle class="section-title">Blog Statistics</SectionTitle>
    <div class="section-content">
      <div class="blog-statistics">
        <div class="latest-post">
          <p>Latest Posts</p>
          <div class="blog" v-for="b in blogs">
            <Card
                :title='b.title'
                :link='b.link'
                summary=''
                :categories='b.categories'
                :published='b.published'
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, PropType} from "@vue/composition-api";
import Icon from "@/components/molecules/Icon.vue";
import SectionTitle from "@/components/molecules/SectionTitle.vue";
import Link from "@/components/molecules/Link.vue";
import {BlogState} from "@/state/WelcomePageState";
import Card from "@/components/molecules/Card.vue";

export default defineComponent({
  name: 'Profile',
  components: {Card, Link, SectionTitle, Icon},
  props: {
    blogs: Array as PropType<BlogState[]>
  },
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

.section-content {
  margin-left: 10px;
}

.blog-statistics {
}

.blog-statistics p {
  font-size: 23px;
  margin: 0;
}
.blog{
  margin: 10px;
}
</style>