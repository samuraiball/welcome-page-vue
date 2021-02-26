<template>
  <div class="blogs">
    <div class="blog" v-for="b in blogs">
      <Card
          :title='b.title'
          :link='b.link'
          :summary='b.summary'
          :categories='b.categories'
          :published='b.published'
      />
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "@vue/composition-api";
import {BlogState} from "@/state/WelcomePageState";
import Card from "@/components/molecules/Card.vue";

export default defineComponent({
  name: "Blogs",
  components: {Card},
  props: {
    blogs: Array as PropType<BlogState[]>
  },
})
</script>

<style scoped>
.blogs {
}

.blog {
  margin: 10px;
}
</style>