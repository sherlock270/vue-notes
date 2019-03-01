<template>
  <div>
    <h1>all notes</h1>
    <Card v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      notes: [
        {
          id: 1,
          title: "title 1",
          content: "contents of the note"
        },
        {
          id: 2,
          title: "title 2",
          content: "contents of the note"
        },
        {
          id: 3,
          title: "title 3",
          content: "contents of the note"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
