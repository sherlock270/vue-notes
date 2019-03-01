<template>
  <div>
    <router-link :to="{ name: 'view-note', params: { id: note.id } }"
      >Note #{{ note.id }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["note"]
};
</script>

<style scoped></style>
