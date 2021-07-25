<template>
  <div class="home">
    <h1>main</h1>
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

<style scoped lang="scss">
.home {
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
