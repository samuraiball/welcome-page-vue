<template>
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
      <div class="top-ten-tags">
        <p>Latest Posts</p>
        <BarChart :data='tenCategories(blogsStatistics.categories)' :max-num="maxNum"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "@vue/composition-api";
import {BlogsStatisticsState, BlogState, CategoryStatisticsState} from "@/state/WelcomePageState";
import BarChart from "@/components/molecules/BarChart.vue";

export default defineComponent({
  name: "BlogStatistics",
  components: {BarChart},
  props: {
    blogs: Array as PropType<BlogState[]>,
    blogsStatistics: BlogsStatisticsState
  },
  setup() {
    const tenCategories =
        (categories: CategoryStatisticsState[]) => categories.sort((c1, c2,) => c1.number > c2.number ? -1 : 1).slice(0, 10)
    return {
      tenCategories,
      maxNum: 27
    }
  }
})
</script>

<style scoped>

.section-content {
  margin-left: 10px;
}

.blog-statistics {
  width: 1024px;
  display: flex;
}

.blog-statistics p {
  font-size: 23px;
  margin: 0;
}

.blog {
  margin: 10px;
}

.latest-post {
  width: 50%;
}

.top-ten-tags {
  width: 50%;
}
</style>