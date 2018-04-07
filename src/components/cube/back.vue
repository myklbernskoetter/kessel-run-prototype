<template lang="html">
  <div class="face back lock-wrapper lock-two">
    <div @click="unlock()">
      <circle-slider
        v-model="val5"
        :side="350"
        :circle-width-rel="30"
        :progress-width-rel="15"
        :knob-radius-rel="10"
        :min="0"
        :max="500"
        :step-size="2"
        knob-color="#00c0ef"
        progress-color="red"
      ></circle-slider>
      <button>check number</button>
    </div>
    <div>{{ val5 }}</div>
    <div class="lock lock-1">Lock 1 is {{ wheelLock1 }}</div>
    <div class="lock lock-2">Lock 2 is {{ wheelLock2 }}</div>
    <div class="lock lock-3">Lock 3 is {{ wheelLock3 }}</div>
    <div class="lock lock-4">Lock 4 is {{ wheelLock4 }}</div>
    <button @click="changeSolved2" type="button" v-if="wheelLock1 == 'unlocked' && wheelLock2 == 'unlocked' && wheelLock3 == 'unlocked' && wheelLock4 == 'unlocked'" name="button">Proceed</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        val5: 10,
        wheelLock1: 'locked',
        wheelLock2: 'locked',
        wheelLock3: 'locked',
        wheelLock4: 'locked',
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
       changeSolved2(event) {
         this.$emit('changeSolved2', 'true');
       }
    },
  }
</script>
