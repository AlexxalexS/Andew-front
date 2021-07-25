<template>
  <div class="image"></div>
</template>

<script>
export default {
  name: "Loader"
};
</script>

<style lang="scss" scoped>
.image {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.9);
  border-radius: 4px;
  height: 40vh;
  width: 80%;
  position: relative;
  overflow: hidden;
  background: #3c3c3c;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(to right, transparent 0%, #161313 50%, transparent 100%);
    animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
  }

  @keyframes load {
    from {
      left: -150px;
    }
    to   {
      left: 100%;
    }
  }


  /*width: 315px;
  height: 250px;
  cursor: progress;

  background: linear-gradient(0.25turn, transparent, #fff, transparent),
  linear-gradient(#eee, #eee);
  background-repeat: no-repeat;

  background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    to {
      background-position: 315px 0, 0 0, 0 0px, 50px 195px;
    }
  }*/
}
</style>
