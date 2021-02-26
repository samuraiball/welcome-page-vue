<template>
  <div class="text">
    <slot/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'SectionTitle',
})
</script>

<style scoped>
.text{
  font-size: 30px;
}
</style>