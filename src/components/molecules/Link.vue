<template>
  <a :href="src" target="_blank">
    --- <slot/>
  </a>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent(
    {
      name: "Link",
      props: {
        src: String
      }
    }
)
</script>
<style scoped>
a {
  display: block;
  font-size: 15px;
  text-decoration: none;
  color: #004643;
}

a:hover {
  color: #f9bc60;
}
</style>