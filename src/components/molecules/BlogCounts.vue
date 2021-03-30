<template>
  <div class="count">{{ count }}件</div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "BlogCounts",
  props: {
    count: Number
  }
})
</script>

<style scoped>
.count {
  color: #808080;
  font-size: 25px;
  margin-left: 10px;
  vertical-align: -3px;
}
</style>