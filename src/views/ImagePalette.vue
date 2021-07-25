<template>
  <div>
    <button @click="$router.go(-1)">Назад</button>
    <div v-if="load" class="skeleton">
      <Loader v-for="i in 6" :key="i" />
    </div>
    <div v-else v-for="image in images" :key="image.id">
      <img class="post-image" :src="image.guid.rendered" alt="">
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Loader from "../components/Loader";

export default {
  name: "ImagePalette",
  components: { Loader },
  data() {
    return {
      images: null,
      load: true
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
      this.load = false
    })
    .catch(() => {
      this.load = false
    })
  }

};
</script>

<style lang="scss" scoped>
.skeleton {
  display: grid;
  gap: 40px;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
.post-image {
  max-width: 600px;
}
</style>
