<template>
  <keep-alive>
    <div class="home">
      <div class="header">
        <div class="container">
          <router-link to="/">
            <img class="header__logo" src="http://andrew-portfolio:8888/wp-content/uploads/2021/07/logo.png" alt="logo">
          </router-link>
          <nav>
            <ul>
              <li>
                <router-link to="/" active-class="active-link">Главная</router-link>
              </li>
              <li>
                <router-link to="/portfolio" active-class="active-link">Портфолио</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
        </div>
      </div>
      <section>
        <div class="first-section">
          <transition-group name="fade" tag="div">
            <div v-for="i in [block1currentIndex]" :key="i" class="image-container">
              <img :src="currentImg" />
            </div>
          </transition-group>

          <!--      <a class="prev" @click="prev" href="#">&#10094; Previous</a>-->
          <!--      <a class="next" @click="next" href="#">&#10095; Next</a>-->
        </div>

      </section>
      <section>
        <div class="first-section">
          <transition-group name="fade" tag="div">
            <div v-for="i in [block2currentIndex]" :key="i" class="image-container">
              <img :src="currentImg2" />
            </div>
          </transition-group>
          <!--      <a class="prev" @click="prev" href="#">&#10094; Previous</a>-->
          <!--      <a class="next" @click="next" href="#">&#10095; Next</a>-->
        </div>
      </section>
    </div>
  </keep-alive>
</template>

<script>

export default {
  name: "Home",
  data() {
    return {
      publicPath: process.env.BASE_URL,
      block1Images: [],
      block1timer: null,
      block1currentIndex: 0,

      block2Images: [],
      block2timer: null,
      block2currentIndex: 0,
    };
  },

  beforeMount() {

  },

  mounted () {
    this.block1Images = [
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image1.jpg",
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image2-scaled.jpg",
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image3-scaled.jpg"
    ]
    this.block2Images = [
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image4.jpg",
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image5.jpg",
      "http://andrew-portfolio:8888/wp-content/uploads/2021/07/image6.jpg",
    ]
    this.startSlide();
    setTimeout(() => {
      this.startSlide2()
    }, 2000)
  },

  methods: {
    startSlide: function() {
      this.block1timer = setInterval(this.next, 4000);
    },

    startSlide2: function() {
      this.block2timer = setInterval(this.next2, 4000);
    },

    next: function() {
      this.block1currentIndex += 1;
    },
    next2: function() {
      this.block2currentIndex += 1;
    },
    // prev: function() {
    //   this.block1currentIndex -= 1;
    // }
  },

  computed: {
    currentImg: function() {
      return this.block1Images[Math.abs(this.block1currentIndex) % this.block1Images.length];
    },
    currentImg2: function() {
      return this.block2Images[Math.abs(this.block2currentIndex) % this.block2Images.length];
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
}

.header {
  position: fixed;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 1000;
  max-width: 1280px;
  width: 100%;
  padding: 60px 100px 0;
  font-size: 20px;

  .container {
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & ul {
    font-weight: 300;
    display: flex;
    //gap: 20px;
    list-style-type: none;
    margin: 0;
    padding: 0;

    & li {
      &:not(:last-child) {
        &::after {
          padding: 0 16px;
          content: "|";
          float: right;
          display: block;
        }
      }
    }

    & a {
      display: inline-block;
      color: #ffffff;
      text-decoration: none;
      letter-spacing: .1em;

      &::after {
        content: '';
        margin-top: 6px;
        width: 0px;
        height: 1px;
        display: block;
        background: #ffffff;
        transition: 300ms;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }

    .active-link {
      &::after {
        content: '';
        margin-top: 6px;
        width: 100%;
        height: 1px;
        display: block;
        background: #ffffff;
      }
    }
  }


  &__logo {
    max-height: 120px;
  }
}

.first-section {
  height: 100vh;
  position: relative;

  &__title {
    z-index: 20;
    position: absolute;
  }

  .image-container {
    height: 100vh;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 1.3s ease;
    overflow: hidden;
    visibility: visible;
    position: absolute;
    width: 100%;
    opacity: 1;
  }

  .fade-enter,
  .fade-leave-to {
    visibility: hidden;
    width: 100%;
    opacity: 0;
  }

  img {
    //height:auto;
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
  }

  .prev, .next {
    cursor: pointer;
    position: absolute;
    top: 40%;
    width: auto;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }

  .next {
    right: 0;
  }

  .prev {
    left: 0;
  }

  .prev:hover, .next:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
}

</style>
