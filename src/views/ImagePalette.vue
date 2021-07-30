<template>
  <div>
    <button @click="$router.push('/portfolio')">Назад</button>
    <div v-if="loader" class="skeleton">
      <Loader v-for="i in 6" :key="i" />
    </div>
    <div v-else>
      <div class="images">
        <div class="images__container">
          <img
            class="post-image"
            v-for="image in images"
            :key="image.ID"
            :src="image.url"
            alt=""
          >
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Loader from "../components/Loader";
import router from "../router";

export default {
  name: "ImagePalette",
  components: { Loader },
  data() {
    return {
      content: null
    };
  },

  props: {
    id: String,
    images: Array,
  },

  methods: {
    ...mapActions({
      loadPosts: "wp/loadPosts"
    })
  },

  computed: {
    ...mapState({
      loader: state => state.wp.loader,
    })
  },

  mounted() {
    if (!this.images || !this.id) {
      console.log("no");
      router.push("portfolio")
    }
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
  //max-width: 600px;
  //grid-template-columns: repeat(3, 1fr);
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  padding: 10px;
}

.images {
  max-width: 1200px;
  padding: 20px 80px;
  margin: 0 auto;

  &__container {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    align-self: center;
    align-content: center;
    align-items: center;
    justify-items: center;
    justify-self: center;
  }
}
</style>
