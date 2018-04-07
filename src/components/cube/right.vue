<template lang="html">
  <div class="face right lock-wrapper lock-4">
    <div>
      <button type="button" name="button" @click="button1 += 45"><span>^{{button1}}</span></button>
      <button type="button" name="button" @click="button2 += 45"><span>^{{button2}}</span></button>
      <button type="button" name="button" @click="button3 += 45"><span>^{{button3}}</span></button>
      <button type="button" name="button" @click="button4 += 45"><span>^{{button4}}</span></button>
      <div class="reset" @click="button1 = 0, button2 = 0, button3 = 0, button4 = 0"><button>Reset Panel</button></div>
      <div class="unlocked-1" v-if="button1 == 360 && button2 == 90 && button3 == 270 && button4 == 360">
        <button @click="changeSolved4" type="button" name="button">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button1: 0,
      button2: 0,
      button3: 0,
      button4: 0
    }
  },
  methods: {
    changeSolved4(event) {
      this.$emit('changeSolved4', 'true');
    },
    rotate() {
      console.log();
    }
  }
}
</script>
