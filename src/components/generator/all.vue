<template lang="html">
<div class="generator puzzle-panel" v-bind:class="{solved: solved}" transition="solved">
  <h2>Power the Generator</h2>
  <div class="gauges">
    <span class="gauge gauge-1">
      <span class="gauge-wrapper">
        <span class="gauge-needle" v-bind:style="{ 'transform': `rotate(${meter1Value - 50}deg)` }"></span>
        <span class="gauge-value">{{meter1Value}}</span>
      </span>
    </span>
    <span class="gauge gauge-2">
      <span class="gauge-wrapper">
        <span class="gauge-needle" v-bind:style="{ 'transform': `rotate(${meter2Value - 50}deg)` }"></span>
        <span class="gauge-value">{{meter2Value}}</span>
      </span>
    </span>
  </div>

  <div class="control-panel">
    <div class="column column-1">
      <ul class="generator-buttons">
        <li v-for="(button, index) in column1Buttons">
          <button type="button" @click="stateChange1(index)" v-bind:class="{'active': column1Buttons[index]['state'] === 'active'}">
            <span class="light"></span>
          </button>
        </li>
      </ul>
    </div>
    <div class="column column-2">
      <ul class="generator-buttons">
        <li v-for="(button, index) in column2Buttons">
          <button type="button" @click="stateChange2(index)" v-bind:class="{'active': column2Buttons[index]['state'] === 'active'}">
            <span class="light"></span>
          </button>
        </li>
      </ul>
    </div>
    <div class="generator-activator">
      <button class="check-button" type="button" name="button" @click="checkAnswer()" v-bind:class="{correct: answer}"><span></span></button>
    </div>
    <div class="reset-button" @click="resetGenerator()">
      <button>reset</button>
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
      meter1Value: 0,
      meter2Value: 0,
      column1Buttons: [
        {id: '1a', state: 'inactive', powerValue: 1},
        {id: '2a', state: 'inactive', powerValue: 15},
        {id: '3a', state: 'inactive', powerValue: 18},
        {id: '4a', state: 'inactive', powerValue: 25},
        {id: '5a', state: 'inactive', powerValue: 1},
      ],
      column2Buttons: [
        {id: '1b', state: 'inactive', powerValue: -1},
        {id: '2b', state: 'inactive', powerValue: 1},
        {id: '3b', state: 'inactive', powerValue: 35},
        {id: '4b', state: 'inactive', powerValue: 1},
        {id: '5b', state: 'inactive', powerValue: 27},
      ],
      answer: false,
      solved: false
    }
  },
  methods: {
    proceed() {
      this.answer = false;
      var self = this;
      setTimeout(function(){
        self.solved = true;
        window.location.replace('/radar');
      }, 3000);
    },
    checkAnswer() {
      if (this.meter1Value === 19 && this.meter2Value === 84) {
        this.answer = true;
      } else {
        this.resetGenerator();
      }
    },
    stateChange1(index) {
      if (this.column1Buttons[index].state === 'inactive') {
        Vue.set(this.column1Buttons[index], 'state', 'active');
        this.meter1Value += this.column1Buttons[index].powerValue;
      }
    },
    stateChange2(index) {
      Vue.set(this.column2Buttons[index], 'state', 'active');
      this.meter2Value += this.column2Buttons[index].powerValue;
      this.powerCheck();
    },
    resetGenerator() {
      this.meter1Value = 0;
      this.meter2Value = 0;
      this.answer = false;
      this.solved = false;

      for (let i = 0; i <= 4; i++) {
        Vue.set(this.column1Buttons[i], 'state', 'inactive');
        Vue.set(this.column2Buttons[i], 'state', 'inactive');
      }
    },
    powerCheck() {
      if (this.meter2Value > 100) {
        this.resetGenerator();
        alert('Overload!');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.generator {
  width: 100%;
  height: 100%;
  background-color: dimgrey;
  &.solved {
    animation: solved 3000ms forwards;
  }
}
.gauge {
  display: block;
  border: 2px solid black;
  border-radius: 50%;
  width: 30rem;
  height: 30rem;
  margin-right: 2rem;
  background-color: grey;
  color: #ccff66;
  font-size: 2.5rem;
  font-family: monospace;
  box-shadow: .5rem .5rem .6rem .2rem rgba(0,0,0,0.75);
}

.gauge-wrapper {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: auto;
  transform: translateY(10%);
  width: 70%;
  height: 70%;
  padding-bottom: 20px;
  border: .3rem solid black;
  border-radius: 50%;
  box-shadow: .3rem .3rem .6rem .2rem rgba(0,0,0,0.75);
}

.gauge-value {
  padding-bottom: 2rem;
}

.gauge-needle {
  width: .5rem;
  height: 10rem;
  background-color: #000;
  transition: transform .75s ease-out;
  transform-origin: 0% 100%;
  position: absolute;
}

.generator-buttons {
  list-style: none;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: .2rem solid #000;
    width: 5rem;
    height: 5rem;
    padding: 0;
    background-color: grey;
  }

  .light {
    display: block;
    width: 3rem;
    height: 3rem;
    background-color: #3f0e07;
    border-bottom: .3rem solid #090000;
    border-left: .1rem solid #090000;

    &:active {
      border-bottom: 0;
    }
  }


  & .active {
    opacity: .7;
    background-color: #fff;

    .light {
      background-color: #ff3b18;
      box-shadow: .1rem -.1rem .6rem .2rem rgba(255,0,43,1);
    }
  }
}

.control-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30rem;
}

.check-button {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  border: 0;
  padding: 0;
  box-shadow: 0 .8rem 0 #3f0e07, 0 1.5rem 2rem rgba(0, 0, 0, .35);
  transition: box-shadow 1s;
  background-color: dimgrey;
  margin-left: 2rem;

  span {
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: #ff3b18;
    border-radius: 50%;
  }

  &:active {
    box-shadow: 0 .8rem 0 #3f0e07, 0 1.2rem 1rem rgba(0, 0, 0, .3);

    span {
      transform: translateY(.6rem);
    }
  }
  &.correct {
    box-shadow: .1rem -.1rem .6rem .2rem rgba(204,255,102,1);
    border: .2rem solid black;
    span {
      background-color: #ccff66;
    }
  }
}

</style>
