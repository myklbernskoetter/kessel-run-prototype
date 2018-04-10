<template>
  <div class="container" v-cloak>
    <div class="frame-top"></div>
    <app-nav></app-nav>
    <slot></slot>
    <div class="frame-bottom"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VLink from '../components/VLink.vue';
  import Nav   from '../components/navigation/all.vue';
  import Howler from 'vue-howler'

  export default {
    components: {
      'app-nav': Nav,
      mixins: [Howler]
    },
  beforeMount(){
    var sound = new Howl({
      src: ['sounds/computer_activate.mp3'],
      autoplay: true,
      volume: 1,
      rate: 1,
    });

    sound.fade(.15, 1, 500);
    sound.rate(1.25);
  }
}
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  font-family: sans-serif;
  color: #fff;
}
  html {
    width: 100vw;
    height: 100vh;
    font-size: 62.5%;
    background-color: #000;
  }

  body {
    width: 100%;
    height: 100vh;
    font-size: 4rem;
    background-color: #000;
  }

  h2 {
    position: relative;
    margin-top: 4rem;
    display: inline-block;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      background-color: #fff;
      width: 3rem;
      height: 3rem;
      animation: blink 2000ms linear infinite;
    }

    &::after {
      right: -5rem;
    }

    &::before {
      right: -10rem;
      animation-delay: 500ms;

    }
  }

  input,
textarea,
[contenteditable] {
  caret-color: #c8b5ed;
  outline-width: 15px;
  outline-color: #c8b5ed;
}

  .frame-top {
    position: absolute;
    top: 3.5rem;
    display: flex;
    justify-content: flex-end;
    border-top-left-radius: 55px;
    width: 95%;
    margin: auto;
    height: 20rem;
    background-color: #fc9827;
    animation: activation 750ms linear 250ms forwards;
    transform: rotateX(90deg);

    &::after {
      position: absolute;
      bottom: -2px;
      left: 68px;
      content: '';
      width: 93%;
      height: 100px;
      border-top-left-radius: 55px;
      background-color: #000;
    }
  }

  .frame-bottom {
    position: absolute;
    bottom: 3.5rem;
    display: flex;
    justify-content: flex-end;
    border-bottom-left-radius: 55px;
    width: 95%;
    margin: auto;
    height: 20rem;
    background-color: #fc9827;
    animation: activation 750ms linear 250ms forwards;
    transform: rotateX(-90deg);

    &::after {
      position: absolute;
      top: -2px;
      left: 68px;
      content: '';
      width: 93%;
      height: 100px;
      border-bottom-left-radius: 55px;
      background-color: #000;
    }
  }

  .container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: #000;
  }

  @keyframes activation {
    0% {
      transform: rotateX(90deg);
      opacity: 0;
    }

    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes fade-out {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes slide-in {
    0% {
      transform: translate3d(100%,0,0);
    }

    100% {
      transform: translate3d(0,0,0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translate3d(0,0,0);
    }

    100% {
      transform: translate3d(-100%,0,0);
    }
  }

  @keyframes nav-activation {
    0% {
      transform: rotateY(90deg);
      opacity: 0;
    }

    100% {
      transform: rotateY(0);
      opacity: 1;
    }
  }

  @keyframes nav-deactivate {
    0% {
      transform: rotateY(0);
      opacity: 1;
    }

    100% {
      transform: rotateY(90deg);
      opacity: 0;
    }
  }

  @keyframes typewriter {
    0% {
      width:0px
    }
    100% {
      width:90rem;
    }
  }

  @keyframes typewriter2 {
    0% {
      width:0px
    }
    100% {
      width: 67%;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
