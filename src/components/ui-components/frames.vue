<template lang="html">
  <div class="component-wrapper">
    <div class="frames">
      <div class="frame top-left-frame">
        <span class="line vertical"></span>
        <span class="line horizontal"></span>
      </div>
      <div class="frame top-right-frame">
        <span class="line vertical"></span>
        <span class="line horizontal"></span>
      </div>
      <div class="frame bottom-left-frame">
        <span class="line vertical"></span>
        <span class="line horizontal"></span>
      </div>
      <div class="frame bottom-right-frame">
        <span class="line vertical"></span>
        <span class="line horizontal"></span>
      </div>
    </div>
  </div>
</template>

<script>
import dnaSpinner from './dna-spinner.vue';
export default {
  components: {
    'app-dnaSpinner': dnaSpinner
 }
}
</script>

<style lang="scss" scoped>

// Screen frames
.frames {
  --frame-spacing: 3.5rem;
  --standard-frame-height: 5rem;
  --standard-frame-width: .2rem;
  --v-frame-height: 7rem;
  --v-frame-width: .2rem;
  --h-frame-height: .2rem;
  --h-frame-width: 5rem;
  --frame-bg-color: #494d50;

  .frame {
    position: fixed;
  }

  .line {
    position: absolute;
    display: block;
    background-color: var(--frame-bg-color);
  }

  .vertical {
    width: var(--v-frame-width);
    height: var(--v-frame-height);
    transform: scale(0);
    animation: scaleUp 500ms linear forwards;
    transform-origin: top;

    &::before {
      content: '';
      position: absolute;
      top: -3rem;
      display: block;
      background-color: inherit;
      width: var(--standard-frame-width);
      height: 2rem;
      transform: scale(0);
      animation: scaleUp 500ms linear forwards;
      animation-delay: 1000ms;
    }
  }

  .horizontal {
    width: var(--h-frame-width);
    height: var(--h-frame-height);
    transform: scale(0);
    animation: scaleUp 500ms linear forwards;
    animation-delay: 500ms;
    transform-origin: top left;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -3rem;
      display: block;
      background-color: inherit;
      width: 2rem;
      height: var(--standard-frame-width);
      transform: scale(0);
      animation: scaleUp 500ms linear forwards;
      animation-delay: 1000ms;
    }
  }

  .top-left-frame {
    top: var(--frame-spacing);
    left: var(--frame-spacing);
  }
  .bottom-left-frame {
    bottom: var(--frame-spacing);
    left: var(--frame-spacing);
    transform: rotateX(180deg);
  }
  .top-right-frame {
    top: var(--frame-spacing);
    right: var(--frame-spacing);
    transform: rotateY(180deg);
  }
  .bottom-right-frame {
    bottom: var(--frame-spacing);
    right: var(--frame-spacing);
    transform: rotateX(180deg) rotateY(180deg);
  }
}
</style>
