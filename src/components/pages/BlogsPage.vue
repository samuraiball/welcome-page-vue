<template>
  <div class="blog-page">
    <SectionTitle>Posted Blogs</SectionTitle>
    <div class="search">
      <SearchBox :word="searchTerm" @updateTerm="updateTerm"/>
      <BlogCounts :count='count'/>
    </div>
    <Blogs :blogs='filteredBlogs'/>
  </div>
</template>

<script lang="ts">
import Blogs from "@/components/organisms/Blogs.vue";
import {Keys} from "@/injector";
import {computed, defineComponent, inject, ref} from "@vue/composition-api";
import SectionTitle from "@/components/molecules/SectionTitle.vue";
import SearchBox from "@/components/molecules/SearchBox.vue";
import BlogCounts from "@/components/molecules/BlogCounts.vue";

export default defineComponent({
      name: 'BlogsPage',
      components: {BlogCounts, SearchBox, SectionTitle, Blogs},
      setup() {
        const state = inject(Keys.WelcomePageStateKeys)!!

        let searchTerm = ref('');
        const updateTerm = (v: string) => searchTerm.value = v

        const filteredBlogs =
            computed(() => state.blogs.filter(b => b.title.includes(searchTerm.value)))
        const count =
            computed(() => filteredBlogs.value.length)

        return {
          count,
          filteredBlogs,
          searchTerm,
          updateTerm
        }
      }
    }
)

</script>
<style scoped>
.blog-page {
  margin-top: 30px;
}

.search {
  display: flex;
  margin-left: 10px;
  align-items: center;
}
</style>