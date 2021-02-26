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
<script>
import Sidebar from "@/components/organisms/Sidebar";
import {defineComponent} from "@vue/composition-api";
import Injector from "./injector";

export default defineComponent({
  components: {Sidebar},
  setup() {
    new Injector().injectModules();
  }
})
</script>