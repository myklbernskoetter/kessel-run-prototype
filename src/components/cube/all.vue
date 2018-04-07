<template lang="html">
  <div class="puzzle-panel wrap">
    <div
      class="cube"
      v-cloak
      v-bind:class="{
        closed: closed,
        lock1Open: solved1,
        lock2Open: solved2,
        lock3Open: solved3,
        lock4Open: solved4,
      }"
    >
      <app-cube-front @changeSolved1="solved1 = true"></app-cube-front>
      <div class="face front-backface">
        <a href="/" v-on:click.prevent="finish(), closed = true"></a>
      </div>
      <app-cube-back @changeSolved2="solved2 = true"></app-cube-back>
      <div class="face top">Top</div>
      <div class="face bottom">Bottom</div>
      <app-cube-left @changeSolved3="solved3 = true"></app-cube-left>
      <app-cube-right @changeSolved4="solved4 = true"></app-cube-right>
    </div>
  </div>
</template>

<script>
  import Front from './front.vue';
  import Back  from './back.vue';
  import Left  from './left.vue';
  import Right from './right.vue';

  export default {
    data() {
      return {
        rotation: 0,
        solved1: false,
        solved2: false,
        solved3: false,
        solved4: false,
        closed:  false
      }
    },
    methods: {
      unlock: function () {
        // Lock 1
        if( this.val5 === 100) {
          this.wheelLock1 = 'unlocked';
        }

        // Lock 2
        if( this.val5 === 16 && this.wheelLock1 === 'unlocked') {
          this.wheelLock2 = 'unlocked';
        }

        // Lock 3
        if( this.val5 === 250 && this.wheelLock1 === 'unlocked' && this.wheelLock2 === 'unlocked') {
          this.wheelLock3 = 'unlocked';
        }

         // Lock 4
         if( this.val5 === 480 && this.wheelLock1 === 'unlocked' && this.wheelLock2 === 'unlocked' && this.wheelLock3 === 'unlocked') {
           this.wheelLock4 = 'unlocked';
         }
       },
       finish: function () {
         this.solved1 = false;
         this.solved2 = false;
         this.solved3 = false;
         this.solved4 = false;
         setTimeout(function(){
           window.location.replace('/generator');
          }, 2000);
       }
     },
     components: {
       'app-cube-front': Front,
       'app-cube-back':  Back,
       'app-cube-left':  Left,
       'app-cube-right': Right
    }
  }
</script>

<style lang="scss">
.unlocked-1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  padding: 1.5rem;

  button {
    font-size: 4rem;
  }
}

.lock {
  font-size: 2.6rem;
}

/* Cube Sides */
.lock-wrapper {
  text-align: center;
  background-color: #fff;
}

.lock-2 {
  text-align: center;
}

.closed .front {
  transform: translateZ(10rem) translateY(0);
  animation: replaceFace 1250ms linear forwards;
}

.lock1Open.cube {
  transform: rotate3d(0, 1, 0, 180deg);
}

.lock2Open.cube {
  transform: rotate3d(0, 1, 0, 90deg);
}

.lock3Open.cube {
  transform: rotate3d(0, 1, 0, 270deg);
}

.lock4Open.cube {
  transform: rotate3d(0, 1, 0, 360deg);
}

.lock4Open .front {
  transform: translateZ(10rem);
  animation: removeFace 1250ms linear forwards;
  animation-delay: 2000ms;
}

.lock4Open .front-backface {
  transform: translateZ(-1.95rem);
}

.front-backface a {
  display: block;
  width: 100%;
  height: 100%;
}

.lock4Open .back div,
.lock4Open .left div,
.lock4Open .right div,
.lock4Open button {
  display: none;
}

/* Cube */
.wrap {
	perspective-origin: 50% 10rem;
}

.cube {
	width: 50rem;
  margin: 0 auto;
	transform-style: preserve-3d;
  transform: rotate3d(0, 0, 0, 0);
  transition: transform 1500ms;
  transform-origin: 50% 50%;

  &.rotation90 {
    transform: rotate3d(0,1,0, 90deg);
  }
  &.rotation180 {
    transform: rotate3d(0,1,0, 180deg);
  }
  &.rotation270 {
    transform: rotate3d(0,1,0, 270deg);
  }
}

.cube > div {
	position: absolute;
	width: 50rem;
	height: 50rem;
}

.face {
  background: #fff;
  box-shadow: inset 0px 0px 10rem #555;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.front,
.front-backface {
  backface-visibility: hidden;
}

.front-backface {
  transform: translateZ(10rem) rotateY(180deg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.back {
	transform: translateZ(-20rem) rotateY(180deg);
}
.right {
	transform: rotateY(-270deg) translateX(20rem);
	transform-origin: top right;
}
.left {
	transform: rotateY(270deg) translateX(-20rem);
	transform-origin: center left;
}
.top {
	transform: rotateX(-90deg) translateY(-10rem);
	transform-origin: top center;
}
.bottom {
	transform: rotateX(90deg) translateY(10rem);
	transform-origin: bottom center;
}
.front {
  transform-origin: top left;
	transform: translateZ(10rem);
}

@keyframes removeFace {
  0% {
    transform: translateZ(10rem);
  }
  100% {
    transform: translateZ(10rem) translateY(-30rem);
  }
}

@keyframes replaceFace {
  0% {
    transform: translateZ(10rem) translateY(-30rem);
  }
  100% {
    transform: translateZ(10rem) translateY(0) ;
  }
}
</style>
