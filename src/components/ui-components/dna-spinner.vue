<template lang="html">
  <div class="component-wrapper">
    <div class="dna-spinner loader">
      <div class="wrapper">
        <div class="row row-1">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="row row-2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.ui-components {
  height: 100%;
  background-color: #000;
}

// 'DNA Spinner'
$cubic-bezier-standard : 0.000, 0.000, 0.230, 1;

@mixin increment-animation($time-default:.25, $loops:1) {
  @for $i from 1 through $loops {
    &:nth-child(#{$i}) {
      animation-delay: $i * $time-default + s;
    }
  }
}

.dna-spinner {
  position: absolute;
    bottom: 50%;
    left: 50%;
  bottom: 7.5rem;
  left: 2.5rem;
  display: block;
  width: 47.5rem;
  height: 8rem;
  opacity: 0;
  animation: opacity 500ms linear 2000ms forwards;
  transform: rotate(90deg) translateX(-50%) translateY(-50%);;

  .row {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;

    &.row-1 {
      margin-left: -.5rem;
      span {
        background: #7ad4f8;
        animation: vertical1 2.5s ease-in-out infinite;
        @include increment-animation(.15, 12);
      }
    }

    &.row-2 {
      span {
        background: #ed0000;
        animation: vertical2 2.5s ease-in-out infinite;
        @include increment-animation(.15, 12);
      }
    }
  }
  span {
    display: inline-block;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
  }
}
</style>
