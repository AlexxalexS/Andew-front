<template>
  <div class="home">
    <div class="header">
      <div class="container">
        <img src="" alt="logo">
      </div>
    </div>
    <nav>
      <ul>
        <li><a href="/portfolio">Портфолио</a></li>
      </ul>
    </nav>
    <!--    <img alt="Vue logo" src="../assets/logo.png" style="height: 50px" />-->
  </div>
</template>

<script>

export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  .header {
    .container {
      max-width: 1280px;
      display: flex;
      justify-content: space-between;
    }
  }
  //display: flex;
  //height: 100%;
  //justify-content: center;
  //flex-direction: column;
  //align-items: center;
}
</style>
