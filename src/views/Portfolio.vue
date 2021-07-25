<template>
  <div class="portfolio">
    <h1>Галерея</h1>
    <br><br>
    <keep-alive>
      <div class="post">
        <div v-for="post in posts" :key="post.id">
          <a class="post__content" :href="post.id">
            <div class="post__title">{{ post.title.rendered }}</div>
            <img class="post__image" :src="post.image" alt="">
          </a>
        </div>
      </div>
    </keep-alive>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Portfolio",
  data() {
    return {
      posts: [],
      load: true
    };
  },

  methods: {
    ...mapActions({
      loadPosts: "wp/loadPosts",
      loadImage: "wp/loadImagePost"
    })
  },

  mounted() {
    this.loadPosts()
      .then((response) => {
        let data = response.data;
        data.forEach(item => {
          this.loadImage({ id: item.featured_media })
            .then((response) => {
              item.image = response.data.guid.rendered;
              this.posts.push(item);
            });
        });
        console.log(this.posts);
        this.load = false
      })
    .catch(() => {
      this.load = false
    })
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
