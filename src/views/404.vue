<template>
  <div class="page404">
    <h1>404 :(</h1>
    <h2>Страницы не существует</h2>
    <br>
    <br>
    <router-link to="/">На главную</router-link>
  </div>
</template>

<script>
export default {
  name: "404"
};
</script>

<style lang="scss" scoped>
.page404 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  h1 {
    font-size: 50px;
    margin-bottom: 20px;
  }

  a {
    color: white;
  }
}
</style>
