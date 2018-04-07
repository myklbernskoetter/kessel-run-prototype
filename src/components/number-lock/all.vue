<template lang="html">
  <div>
    <div>
      <span class="rotator rotator-1"><input type="number" v-model="data1" min="0" max="9"></span>
      <span class="rotator rotator-2"><input type="number" v-model="data2" min="0" max="9"></span>
      <span class="rotator rotator-3"><input type="number" v-model="data3" min="0" max="9"></span>
      <span class="rotator rotator-4"><input type="number" v-model="data4" min="0" max="9"></span>
    </div>

    <div class="unlocked-1" v-if="data1 == ans1 && data2 == ans2 && data3 == ans3 && data4 == ans4">
      <button class="puzzle-1-unlock" @click="gate1Clear()" type="button" name="button">Proceed</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: this.data_1,
      data2: this.data_2,
      data3: this.data_3,
      data4: this.data_4,
      ans1: this.answer1,
      ans2: this.answer2,
      ans3: this.answer3,
      ans4: this.answer4,
    }
  },
  methods: {
    gate1Clear(event) {
      this.$emit('gate1Clear', 'true');
    }
  },
  props: [
    'data_1',
    'data_2',
    'data_3',
    'data_4',
    'answer1',
    'answer2',
    'answer3',
    'answer4'
  ],
}
</script>

<style lang="scss">
.data {
  color: #fff;
  font-size: 8rem;
}

.puzzle-1-unlock {
  color: #fff;
  font-size: 8rem;
  border: 0;
  border-bottom: .5rem solid #fff;
  background-color: transparent;
}

.rotator input {
  font-size: 12rem;
  background-color: #000;
  border: 0;
  border-bottom: .2rem solid #fff;
  text-align: center;
  color: #fff;
}
</style>
