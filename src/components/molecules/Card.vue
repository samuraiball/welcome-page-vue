<template>
  <a :href='link' target="_blank">
    <div class="card">
      <div class="title">{{ title }}</div>
      <div class="summary">{{ summary }}</div>
      <div class="footer">
        <span class="tag" v-for="c in categories">
          {{ c }}
        </span>
        <div class="published">{{ published }}</div>
      </div>
    </div>
  </a>

</template>

<script>
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'Card',
  props: {
    title: String,
    link: String,
    summary: String,
    categories: Array,
    published: String
  }
})
</script>

<style scoped>
a {
  text-decoration: none;
}

.card {
  border: solid 1px #C0C0C0;
  border-radius: 2px;
  padding-bottom: 10px;
}

.card:hover {
  transition: 0.2s;
  background: #f8ca8d;
}

.title {
  color: black;
  font-weight: bold;
  font-size: 18px;
  margin: 0 10px;
}

.summary {
  margin: 3px 10px 0 12px;
  font-size: 14px;
  color: #808080;
}

.footer {
  display: flex;
  margin-top: 5px;
}

.published {
  font-size: 15px;
  margin-left: 20px;
  color: #808080;
}

.tag {
  color: white;
  font-size: 12px;
  background-color: #004643;
  padding: 2px 6px;
  margin-left: 5px;
  border-radius: 5px;
}
</style>