<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MainLayout",

  methods: {
    ...mapActions({
      loadPosts: "wp/loadPosts",
    })
  },

  mounted() {
    this.loadPosts().then(() => {
      console.log("загружено");
    });
  }
};
</script>

<style scoped>

</style>
