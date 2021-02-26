<template>
  <div class="sidebar">
    <router-link class="top-link" to="/">Heno</router-link>
    <router-link class="child-link" to="/">Profile</router-link>
    <router-link class="child-link" to="/blogs">Blogs</router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
}
</script>

<style scoped>
.sidebar {
  background: #004643;
  padding-top: 20px;
  width: 170px;
  height: 100vh;
  box-shadow: black 0 0 5px;
}

.top-link {
  display: block;
  font-size: 24px;
  color: white;
  margin-left: 20px;
  text-decoration: none;
}

.child-link {
  display: block;
  font-size: 18px;
  color: white;
  margin-left: 40px;
  margin-top: 8px;
  text-decoration: none;
}

.child-link:hover {
  transition: 0.2s;
  color: #d4d1d1;
}

.sidebar .child-link:nth-child(n)::before {
  content: '┣';
  margin-right: 5px;
}

.sidebar .child-link:last-child::before {
  content: '┗';
}

</style>