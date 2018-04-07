<template lang="html">
  <div class="light-panel puzzle-panel" v-bind:class="{solved: solved}" transition="solved">
    <h2>Light Panel</h2>
    <h3>:Activate the correct lights in the correct order.</h3>
    <div class="map-container">
      <template v-for="(light, index) in lights">
        <label class="light-label">
          <input type="checkbox" v-bind:value="light.name" class="light" v-model="currentState">
          <span class="checkmark"></span>
        </label>
      </template>
    </div>
    <div class="controls">
      <div class="scanner-activator">
        <button type="button" name="button" @click="checkAnswer()"><span>Check Answer</span></button>
      </div>
      <div class="proceed-wrapper">
        <transition name="raise">
          <div class="proceed-button" v-if="answer">
            <button @click="proceed()">Proceed</button>
          </div>
        </transition>
        <span class="left-panel panel" v-bind:class="{open: answer}"></span>
        <span class="right-panel panel" v-bind:class="{open: answer}"></span>
        <span class="mask-panel panel"></span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      lights: [
        {name: '1a', state: 'unscanned'},
        {name: '2a', state: 'unscanned'},
        {name: '3a', state: 'unscanned'},
        {name: '4a', state: 'unscanned'},
        {name: '5a', state: 'unscanned'},
        {name: '1b', state: 'unscanned'},
        {name: '2b', state: 'unscanned'},
        {name: '3b', state: 'unscanned'},
        {name: '4b', state: 'unscanned'},
        {name: '5b', state: 'unscanned'},
        {name: '1c', state: 'unscanned'},
        {name: '2c', state: 'unscanned'},
        {name: '3c', state: 'unscanned'},
        {name: '4c', state: 'unscanned'},
        {name: '5c', state: 'unscanned'},
        {name: '1d', state: 'unscanned'},
        {name: '2d', state: 'unscanned'},
        {name: '3d', state: 'unscanned'},
        {name: '4d', state: 'unscanned'},
        {name: '5d', state: 'unscanned'},
        {name: '1e', state: 'unscanned'},
        {name: '2e', state: 'unscanned'},
        {name: '3e', state: 'unscanned'},
        {name: '4e', state: 'unscanned'},
        {name: '5e', state: 'unscanned'}
      ],
      answerKey: [
        '1a','1b','1c','1d','1e'
      ],
      currentState: [],
      answer: false,
      solved: false
    }
  },
  methods:  {
    checkAnswer() {
      if ( this.currentState.join() == this.answerKey.join()) {
        this.answer = true;
      } else {
        this.answer = false;
      }
    },
    proceed() {
      this.answer = false;
      var self = this;
      setTimeout(function(){
        self.solved = true;
      }, 3000);
    }
  }
}
</script>

<style lang="scss">
.light-panel {
  width: 100%;
  height: 100%;
  background-color: grey;

  .map-container {
    display: grid;
    grid-template-columns: repeat(5, 7.5rem);
    grid-template-rows: repeat(5, 7.5rem);
    grid-gap: 1rem;
    justify-content: center;
    align-content: center;
  }

  &.solved {
    animation: solved 3000ms forwards;
  }

  @keyframes solved {
    0% {
      transform: translateY(0);
    }

    10% {
      transform: translateY(5rem);
    }
    20% {
      transform: translateY(5rem);
    }
    100% {
      transform: translateY(-150rem);
    }
  }

  .light {
    display: block;
    width: 7.5rem;
    height: 7.5rem;
    background-color: pink;
  }

  // Custom Checkboxes
  /* Customize the label (the container) */
  .light-label {
    display: block;
    position: relative;
    cursor: pointer;
    font-size: 2.2rem;
    user-select: none;
  }

  .light-label input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    background-color: #eee;
  }

  .light-label:hover input ~ .checkmark {
    background-color: skyblue;
  }

  .light-label input:checked ~ .checkmark {
    background-color: lightgreen;
  }


  /* Show the checkmark when checked */
  .light-label input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the checkmark/indicator */
  .light-label .checkmark:after {
    left: .9rem;
    top: .5rem;
    width: .5rem;
    height: 1rem;
    border: solid white;
    border-width: 0 .3rem .3rem 0;
    transform: rotate(45deg);
  }

  .controls {
    grid-column-start: 1;
    grid-column-end: -1;
    text-align: center;
  }

  .proceed-button {
    position: absolute;
    left: 50%;
  }

  .proceed-wrapper {
    .panel{
      position: absolute;
      display: inline-block;
      border: 1px solid black;
      width: 10rem;
      height: 10rem;
      transition: transform 3s;
      background-color: grey;
      z-index: 2;
    }

    .left-panel {
      transform: translate3d(-5rem, 0, 0);

      &.open {
        transform: translate3d(-10rem, 0, 0);
      }
    }

    .right-panel {
      transform: translate3d(5rem,0,0);
      &.open {
        transform: translate3d(10rem, 0, 0);
      }
    }

    .mask-panel {
      transform: translateY(3rem);
      border: 0;
      width: 10rem;
      height: 10rem;
      z-index: 1;
    }
  }

  // Raise Button Transition
  .raise-enter-active,
  .raise-leave-active {
    transition: transform 3s;
    transition-delay: .5s;
  }

  .raise-enter {
    transform: translateY(200%);
    opacity: 0;
  }

  .raise-enter-to {
    transform: translateY(0);
    opacity: 1;
  }

  .raise-leave {
    transform: translateY(0);
  }

  .raise-leave-to {
    transform: translateY(200%);
  }
}

</style>
