<template lang="html">
  <div class="component-wrapper">
    <div class="hal-wrapper">
      <!-- <span class="brow"></span>
      <span class="eye"></span> -->
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.hal-wrapper {
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
}
.brow {
  display: block;
  width: 5rem;
  height: 5rem;
  border-top: .5rem solid #ed0000;
  border-radius: 50%;
}

.eye {
  position: absolute;
  top: 1.5rem;
  left: 1rem;
  display: block;
  width: 2rem;
  height: 2rem;
  border: .5rem solid #ed0000;
  background-color: #000;
  border-radius: 50%;
}
</style>
