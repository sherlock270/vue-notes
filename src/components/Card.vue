<template>
  <div class="card-container">
    <router-link :to="{ name: 'view-note', params: { id: note.id } }">
      <div class="card">
        <h2>{{ note.title }}</h2>
        <p>{{ note.content }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["note"]
};
</script>

<style scoped>
.card-container {
  margin: 10px;
  height: 150px;
  width: 30%;
}

.card-container a {
  text-decoration: none;
  color: black;
}

.card {
  border: 1px solid black;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: left;
}

.card h2 {
  margin: 5px;
}

.card p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
