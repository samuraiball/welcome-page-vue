<template>
  <div class="blog-page">
    <SectionTitle>Posted Blogs</SectionTitle>
    <div class="search">
      <SearchBox :word="state.searchWord" @updateTerm="updateTerm"/>
      <BlogCounts :count='state.filteredBlogs.length'/>
    </div>
    <Blogs :blogs='state.filteredBlogs'/>
  </div>
</template>

<script lang="ts">
import Blogs from "@/components/organisms/Blogs.vue";
import {Keys} from "@/injector";
import {defineComponent, inject} from "@vue/composition-api";
import SectionTitle from "@/components/molecules/SectionTitle.vue";
import SearchBox from "@/components/molecules/SearchBox.vue";
import BlogCounts from "@/components/molecules/BlogCounts.vue";

export default defineComponent({
      name: 'BlogsPage',
      components: {BlogCounts, SearchBox, SectionTitle, Blogs},
      setup() {
        const state = inject(Keys.WelcomePageStateKeys)!!
        const blogsUseCase = inject(Keys.BlogsUseCaseKeys)!!

        const updateTerm = (v: string) => blogsUseCase.filterByWord(v)

        return {
          state,
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