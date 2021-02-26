<template>
  <input v-model="word" placeholder="Search" @input="updateTerm($event.target.value)"/>
</template>

<script lang="ts">
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "SearchBox",
  props: {
    word: String,
  },
  setup(props, context) {
    const updateTerm = (v: string) => context.emit('updateTerm', v)
    return {
      updateTerm
    }
  }
})
</script>

<style scoped>
input {
  height: 30px;
  width: 250px;
  border-radius: 5px;
}
</style>