<template>
  <div class="view-notes-container">
    <h1>Home</h1>
    <div class="notes-container">
      <Card v-for="note in notes" :key="note.id" :note="note" />
    </div>
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
          content:
            "Spicy jalapeno bacon ipsum dolor amet cow prosciutto short loin hamburger boudin, kevin pork loin porchetta ground round. Landjaeger turducken meatloaf, doner sausage prosciutto cow andouille pork beef ribs short loin. Buffalo capicola kielbasa bacon meatloaf tail. Porchetta shoulder brisket ham hock, strip steak jerky ribeye boudin kielbasa shankle cow pig."
        },
        {
          id: 2,
          title: "title 2",
          content:
            "Spicy jalapeno bacon ipsum dolor amet cow prosciutto short loin hamburger boudin, kevin pork loin porchetta ground round. Landjaeger turducken meatloaf, doner sausage prosciutto cow andouille pork beef ribs short loin. Buffalo capicola kielbasa bacon meatloaf tail. Porchetta shoulder brisket ham hock, strip steak jerky ribeye boudin kielbasa shankle cow pig."
        },
        {
          id: 3,
          title: "title 3",
          content:
            "Spicy jalapeno bacon ipsum dolor amet cow prosciutto short loin hamburger boudin, kevin pork loin porchetta ground round. Landjaeger turducken meatloaf, doner sausage prosciutto cow andouille pork beef ribs short loin. Buffalo capicola kielbasa bacon meatloaf tail. Porchetta shoulder brisket ham hock, strip steak jerky ribeye boudin kielbasa shankle cow pig."
        }
      ]
    };
  }
};
</script>

<style scoped>
.view-notes-container {
  width: 70%;
  height: 100vh;
}

.notes-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

h1 {
  margin: 20px;
}
</style>
