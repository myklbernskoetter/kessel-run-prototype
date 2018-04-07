<template lang="html">
  <div class="radar puzzle-panel" v-bind:class="{solved: solved}" transition="solved">
    <template v-for="(sector, index) in sectors">
      <label class="sector-label">
        <input type="checkbox" v-bind:value="sector.name" class="sector" @click="stateChange(index)">
        <span class="checkmark"></span>
      </label>
    </template>
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
      sectors: [
        {name: '1a', state: 'unscanned'},
        {name: '2a', state: 'unscanned'},
        {name: '3a', state: 'unscanned'},
        {name: '4a', state: 'unscanned'},
        {name: '5a', state: 'unscanned'},
        {name: '6a', state: 'unscanned'},
        {name: '1b', state: 'unscanned'},
        {name: '2b', state: 'unscanned'},
        {name: '3b', state: 'unscanned'},
        {name: '4b', state: 'unscanned'},
        {name: '5b', state: 'unscanned'},
        {name: '6b', state: 'unscanned'},
        {name: '1c', state: 'unscanned'},
        {name: '2c', state: 'unscanned'},
        {name: '3c', state: 'unscanned'},
        {name: '4c', state: 'unscanned'},
        {name: '5c', state: 'unscanned'},
        {name: '6c', state: 'unscanned'},
        {name: '1d', state: 'unscanned'},
        {name: '2d', state: 'unscanned'},
        {name: '3d', state: 'unscanned'},
        {name: '4d', state: 'unscanned'},
        {name: '5d', state: 'unscanned'},
        {name: '6d', state: 'unscanned'},
        {name: '1e', state: 'unscanned'},
        {name: '2e', state: 'unscanned'},
        {name: '3e', state: 'unscanned'},
        {name: '4e', state: 'unscanned'},
        {name: '5e', state: 'unscanned'},
        {name: '6e', state: 'unscanned'},
        {name: '1f', state: 'unscanned'},
        {name: '2f', state: 'unscanned'},
        {name: '3f', state: 'unscanned'},
        {name: '4f', state: 'unscanned'},
        {name: '5f', state: 'unscanned'},
        {name: '6f', state: 'unscanned'},
      ],
      answerKey: [
        '1a','2b','3c','4d','5e','6f','1d'
      ],
      currentState: [],
      answer: false,
      solved: false
    }
  },
  methods:  {
    stateChange(index) {
      const currentSector = this.sectors[index];
      if (this.sectors[index].state === 'unscanned') {
        Vue.set(currentSector, 'state', 'scanned');
        this.currentState.push(currentSector.name);
      } else {
        Vue.set(this.sectors[index], 'state', 'unscanned');
        const stateIndex = this.currentState.indexOf(currentSector.name);

        if(stateIndex != -1) {
        	this.currentState.splice(stateIndex, 1);
        }
      }
    },
    checkAnswer() {
      if ( this.currentState.sort().join() == this.answerKey.sort().join()) {
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
        window.location.replace('/light-array');
      }, 3000);
    }
  }
}
</script>

<style lang="scss">
.radar {
  display: grid;
  grid-template-columns: repeat(6, 10.4rem);
  grid-template-rows: repeat(6, 10.4rem);
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background-image: url('/src/assets/scan-map.png');
  background-size: 60rem 60rem;
  background-repeat: no-repeat;
  background-position: center;
  background-color: grey;
  perspective: 80rem;
	perspective-origin: 50% 10rem;

  &.solved {
    animation: solved 3000ms forwards;
  }
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

.sector {
  display: block;
  width: 10rem;
  height: 10rem;
  background-color: pink;
}

// Custom Checkboxes
/* Customize the label (the container) */
.sector-label {
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 2.2rem;
  user-select: none;
}

.sector-label input {
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
  background-color: #eee;
  outline: .1rem dotted grey;
}

.sector-label:hover input ~ .checkmark {
  background-color: skyblue;
}

.sector-label input:checked ~ .checkmark {
  background-color: skyblue;
  opacity: .5;
}


/* Show the checkmark when checked */
.sector-label input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.sector-label .checkmark:after {
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
}

.proceed-button {
  position: absolute;
}

.proceed-wrapper {
  .panel{
    position: absolute;
    display: inline-block;
    border: .1rem solid black;
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
</style>
