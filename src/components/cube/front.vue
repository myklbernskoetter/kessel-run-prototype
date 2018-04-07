<template lang="html">
  <div class="face front lock-wrapper lock-one">
    <div>
      <span class="rotator rotator-1"><input type="number" v-model="data1" min="0" max="9"></span>
      <span class="rotator rotator-2"><input type="number" v-model="data2" min="0" max="9"></span>
      <span class="rotator rotator-3"><input type="number" v-model="data3" min="0" max="9"></span>
      <span class="rotator rotator-4"><input type="number" v-model="data4" min="0" max="9"></span>
    </div>

    <div class="unlocked-1" v-if="data1 == 1 && data2 == 7 && data3 == 0 && data4 == 1">
      <button @click="changeSolved1" type="button" name="button">Proceed</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data1: Math.floor(Math.random() * 10),
      data2: Math.floor(Math.random() * 10),
      data3: Math.floor(Math.random() * 10),
      data4: Math.floor(Math.random() * 10),
    }
  },
  methods: {
    changeSolved1(event) {
      this.$emit('changeSolved1', 'true');
    }
  }
}
</script>

<style lang="scss">
/* Lock 1 */
.rotator input{
  position: absolute;
  padding: 2rem 2rem 1rem;
  font-size: 3rem;
  border: .2rem solid var(--black);
  text-align: center;
}

.rotator-1 input {
  top: 1rem;
  left: 1rem;
  background-color: var(--red);
}
.rotator-2 input {
  top: 1rem;
  right: 1rem;
  background-color: var(--gold);
}
.rotator-3 input {
  bottom: 1rem;
  left: 1rem;
  background-color: var(--blue);
}
.rotator-4 input{
  bottom: 1rem;
  right: 1rem;
  background-color: var(--green);
}

/* End Lock 1 */
</style>
