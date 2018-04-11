<template lang="html">
  <div class="component-wrapper">
    <div class="background-grid">
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>

      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>

      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>

      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>

      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
      <span>*</span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@mixin increment-animation($time-default:.25, $loops:1) {
  @for $i from 1 through $loops {
    &:nth-child(#{$i}) {
      animation-delay: $i * $time-default + s;
    }
  }
}
  .background-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #000;
    color: #7ad4f8;

    span {
      transform: scale(0) translateY(-5rem);
      animation: background-grid 250ms linear forwards;
      @include increment-animation(.05, 35);
    }

    span {
      opacity: .6;
    }
  }
</style>
