<template>
  <div class="blog-page">
    <SectionTitle>Posted Blogs</SectionTitle>
    <Blogs :blogs='state.blogs'/>
  </div>
</template>

<script lang="ts">
import Blogs from "@/components/organisms/Blogs.vue";
import {Keys} from "@/injector";
import {defineComponent, inject} from "@vue/composition-api";
import SectionTitle from "@/components/molecules/SectionTitle.vue";

export default defineComponent({
      name: 'BlogsPage',
      components: {SectionTitle, Blogs},
      setup() {
        const blogsUseCase = inject(Keys.BlogsUseCaseKeys)!!
        const state = inject(Keys.WelcomePageStateKeys)!!
        blogsUseCase.find()
        return {
          state
        }
      },
    }
)

</script>
<style scoped>
.blog-page {
  margin-top: 30px;
}
</style>