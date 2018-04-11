<template lang="html">
  <div class="component-wrapper">
    <div class="scene">
      <div class="wrapper">
        <div class="globe">
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
          <span class="ring"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  @keyframes spin {
    to {
      transform:rotateY(-360deg);
    }
  }

  @keyframes show {
  to {
    opacity: 1;
  }
}
  .component-wrapper {
    position: absolute;
  }

  .scene {
    position: absolute;
    left: 5rem;
    width: 20rem;
    height: 20rem;
    margin: 2% auto;
    perspective: 100rem;
    animation: opacity 500ms linear 4000ms forwards;
    opacity: 0;
  }

  .wrapper {
    width:100%;
    height:100%;
    transform: rotateX(-8deg) rotateY(0deg);
    transform-style: preserve-3d;
  }

  .globe {
    position: relative;
    width: 70%;
    height: 70%;
    margin:0 auto;
    transform-style:  preserve-3d;
    animation: spin 25s 0ms infinite linear;
  }
  .ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border:3px;
    border-style: dotted;
    border-radius: 50%;
    color:#7ad4f8;
    animation: show 0.75s forwards ease-in-out;
    opacity: 0;
  }
  .ring:nth-child(1) {
    transform: rotateY(4deg);
    animation-delay: 0s;
  }
  .ring:nth-child(2) {
    transform: rotateY(30deg);
    animation-delay: 0s;
  }
  .ring:nth-child(3) {
    transform: rotateY(56deg);
    animation-delay: 0s;
  }
  .ring:nth-child(4) {
    transform: rotateY(82deg);
    animation-delay: 0s;
  }
  .ring:nth-child(5) {
    transform: rotateY(108deg);
    animation-delay: 0s;
  }
  .ring:nth-child(6) {
    transform: rotateY(134deg);
    animation-delay: 0s;
  }
  .ring:nth-child(7) {
    transform: rotateY(160deg);
    animation-delay: 0s;
  }
</style>
