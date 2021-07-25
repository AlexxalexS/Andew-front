<template>
  <div>
    <button @click="$router.go(-1)">Назад</button>
    <div v-for="image in images" :key="image.id">
      <img class="post-image" :src="image.guid.rendered" alt="">
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "ImagePalette",
  data() {
    return {
      images: null
    };
  },

  props: {
    id: String
  },

  methods: {
    ...mapActions({
      imageThemes: "wp/loadOncePost"
    })
  },

  mounted() {
    console.log(this.id);
    this.imageThemes({ id: this.id })
    .then((response) => {
      console.log(response);
      this.images = response.data
    })
  }

};
</script>

<style lang="scss" scoped>
.post-image {
  max-width: 600px;
}
</style>
