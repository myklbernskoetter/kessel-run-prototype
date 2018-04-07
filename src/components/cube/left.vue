<template lang="html">
  <div class="face left lock-wrapper lock-three">
    <div>
      <span class="letter letter-1"><input type="text" v-model="letter1" maxlength="1"></span>
      <span class="letter letter-2"><input type="text" v-model="letter2" maxlength="1"></span>
      <span class="letter letter-3"><input type="text" v-model="letter3" maxlength="1"></span>
      <span class="letter letter-4"><input type="text" v-model="letter4" maxlength="1"></span>
    </div>

    <div class="unlocked-1" v-if="letter1 == 'l' && letter2 == 'o' && letter3 == 'c' && letter4 == 'k'">
      <button @click="changeSolved3"  type="button" name="button">Proceed</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letter1: '',
      letter2: '',
      letter3: '',
      letter4: '',
    }
  },
  methods: {
    changeSolved3(event) {
      this.$emit('changeSolved3', 'true');
    }
  }
}
</script>

<style lang="scss">
  /* Lock 3 */
  .letter input{
    margin-top: 5rem;
    width: 4rem;
    height: 4rem;
    font-size: 3rem;
    border: 2px solid var(--black);
    text-align: center;
    border: 0;
    border-bottom: .3rem solid black;
    background-color: transparent;
  }

  .letter1 input {
    top: 1rem;
    left: 1rem;
    background-color: var(--red);
  }
  .letter2 input {
    top: 1rem;
    right: 1rem;
    background-color: var(--gold);
  }
  .letter3 input {
    bottom: 1rem;
    left: 1rem;
    background-color: var(--blue);
  }
  .letter4 input{
    bottom: 1rem;
    right: 1rem;
    background-color: var(--green);
  }
  /* End Lock 3 */
</style>
