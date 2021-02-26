<template>
  <div>
    <Sidebar class="sidebar"/>
    <router-view class="main-contents"/>
  </div>
</template>

<style>

* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.7em;
}

body {
  margin: 0;

}

.main-contents {
  margin-left: 200px;
}

.sidebar {
  position: fixed;
  top: 0;
}
</style>
<script lang="ts">
import {defineComponent, inject} from "@vue/composition-api";
import Injector, {Keys} from "./injector";
import Sidebar from "@/components/organisms/Sidebar.vue";

export default defineComponent({
  components: {Sidebar},
  setup() {
    new Injector().injectModules()
    const blogsUseCase = inject(Keys.BlogsUseCaseKeys)!!
    blogsUseCase.find()
  },
})
</script>