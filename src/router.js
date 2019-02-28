import Vue from "vue";
import Router from "vue-router";
import ViewNotes from "./views/ViewNotes.vue";
import ViewNote from "./views/ViewNote.vue";
import AddNew from "./views/AddNew.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "view-notes",
      component: ViewNotes
    },
    {
      path: "/view/:id",
      name: "view-note",
      component: ViewNote,
      props: true
    },
    {
      path: "/add-note",
      name: "add-note",
      component: AddNew
    }
  ]
});
