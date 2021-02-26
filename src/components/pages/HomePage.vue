<template>
  <Profile :blogs="latestBlogs"/>
</template>

<script lang="ts">
import {computed, defineComponent, inject} from "@vue/composition-api";
import {Keys} from "@/injector";
import Profile from "@/components/organisms/Profile.vue";

export default defineComponent(
    {
      name: "Home",
      components: {Profile},
      setup() {
        const state = inject(Keys.WelcomePageStateKeys)!!
        const latestBlogs = computed(()=> state.blogs.slice(0,3))
        return {
          latestBlogs
        }
      }

    }
)
</script>

<style scoped>

</style>