<template>
  <div class="navbar">
    <h2>Navigation bar</h2>
    <router-link class="rlink" :to="{ name: 'view-notes' }">Home</router-link>
    <router-link class="rlink" :to="{ name: 'add-note' }"
      >Add a Note</router-link
    >
    <p>Created by Charles Cortinas</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  widows: 100%;
  height: 100vh;
  background-color: #00f;
  color: white;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
}

.rlink {
  color: inherit;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  width: 50%;
  border-bottom: 1px solid white;
  margin: 10px auto;
}

p {
  bottom: 0;
}
</style>
