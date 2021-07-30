<template>
  <div class="portfolio">
    <button @click="$router.push('/')">Назад</button>
    <br>
    <h1>Галерея</h1>

    <br><br>
    <keep-alive>
      <div class="post" v-if="!loader" >
        <div v-for="post in posts" :key="post.ID">
          <router-link class="post__content" :to="{ name: 'images', params: {images: post.acf.gallery, id: post.post_name}}" >
            <img class="post__image" :src="post.acf.image.url" alt="">
            <div class="post__title">{{ post.acf.title }}</div>
          </router-link>
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Portfolio",
  data() {
    return {
      load: true
    };
  },

  methods: {
    ...mapActions({
      loadPosts: "wp/loadPosts",
    })
  },

  computed: {
    ...mapState({
      posts: state => state.wp.posts,
      loader: state => state.wp.loader
    })
  },

  watch: {
    loader(first) {
      if (!first) {
        console.log(this.posts);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.portfolio {
  margin: 0 auto;
}

.post {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  flex-direction: column;
  padding: 20px;

  &__content {
    background: rgba(255,255,255,0.2);

    position: relative;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 18px;
    padding: 10px;
    display: grid;
    gap: 20px;
    align-items: center;
    justify-items: center;
    text-align: center;

    &:hover {
      .post {
        &__image {
          transform: scale(1.1);
        }

        &__title {
          transform: scale(1.08);
        }
      }

    }
  }

  &__title {
    z-index: 2;
    padding: 10px 20px;
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: white;
    background-color: black;
    transition: transform .6s;
  }


  &__image {
    padding: 20px;
    max-width: 100%;
    height: 200px;
    transition: transform .2s;

  }
}

@media (max-width: 1000px) {
  .post {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 650px) {
  .post {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
