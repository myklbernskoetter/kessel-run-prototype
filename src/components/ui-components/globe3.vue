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
    from {
      transform:rotateY(0deg);
    }
    to {
      transform:rotateY(-359deg);
    }
  }

  @keyframes show {
  to {
    opacity: 1;
  }
}

@keyframes flicker-on-2 {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  15% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  55% {
    opacity: 1;
  }

  57% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  76% {
    opacity: 1;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
  .component-wrapper {
    position: absolute;
    right: 40rem;
  }

  .scene {
    position: absolute;
    top: 10rem;
    // left: 100%;
    width: 35rem;
    height: 35rem;
    margin: 2% auto;
    perspective: 100rem;
    animation: flicker-on-2 1500ms linear 1500ms forwards;
    opacity: 0;

    &.small {
      width: 15rem;
      height: 15rem;
    }
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
    animation: spin 35s linear infinite;
  }
  .ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: .1rem;
    border-style: dashed;
    border-radius: 50%;
    color: #fff;
    animation: show 0.75s forwards ease-in-out;
    opacity: 0;
  }

  .ring:nth-child(1) {
    transform: rotateY(4deg);
  }
  .ring:nth-child(2) {
    transform: rotateY(30deg);
  }
  .ring:nth-child(3) {
    transform: rotateY(56deg);
  }
  .ring:nth-child(4) {
    transform: rotateY(82deg);
  }
  .ring:nth-child(5) {
    transform: rotateY(108deg);
  }
  .ring:nth-child(6) {
    transform: rotateY(134deg);
  }
  .ring:nth-child(7) {
    transform: rotateY(160deg);
  }

  .ring:nth-child(8) {
    transform: rotateY(160deg) rotateX(100deg) scale(1.75);
    border: 0;

    &::before {
      content: '';
      position: absolute;
      top: 2rem;
      left: 19rem;
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: #fff;
      perspective: 800px;
      transform-style:  preserve-3d;
    }
    &::after {
      content: '';
      position: absolute;
      top: 2rem;
      left: 19rem;
      display: block;
      width: 5px;
      height: 45px;
      border-radius: 50%;
      // background: #fff;
      border-top: .5rem solid #fff;
      perspective: 800px;
      transform-style:  preserve-3d;
    }
  }

</style>
