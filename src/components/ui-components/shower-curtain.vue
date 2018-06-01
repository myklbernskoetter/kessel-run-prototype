<template lang="html">
<div class="component-wrapper">
  <div class="curtain-wrapper">
    <span class="line-wrapper">
      <span class="line line-1">
        <span  class="sphere sphere-1"></span>
        <span  class="sphere sphere-2 small"></span>
        <span  class="sphere sphere-3"></span>
      </span>
    </span>
    <span class="line-wrapper">
      <span class="line line-2">
        <span  class="sphere sphere-4 small"></span>
        <span  class="sphere sphere-5 large"></span>
        <span  class="sphere sphere-6"></span>
      </span>
    </span>
    <span class="line-wrapper">
      <span class="line line-3">
        <span  class="sphere sphere-1 fast"></span>
        <span  class="sphere sphere-2 fast small"></span>
        <span  class="sphere sphere-3 fast"></span>
      </span>
    </span>
    <span class="line-wrapper">
      <span class="line line-4">
        <span  class="sphere sphere-4 slow small"></span>
        <span  class="sphere sphere-5 slow large"></span>
        <span  class="sphere sphere-6 slow small"></span>
      </span>
    </span>
    <span class="line-wrapper">
      <span class="line line-5">
        <span  class="sphere sphere-1"></span>
        <span  class="sphere sphere-2"></span>
        <span  class="sphere sphere-3"></span>
      </span>
    </span>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@keyframes drop {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(1000px);
  }
}

.curtain-wrapper {
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 30rem;
}

.curtain-wrapper {
  overflow-x: hidden;
}

.line-wrapper {
  display: inline-block;
  padding: 0 2.5rem;
  overflow-y: hidden;
  vertical-align: top;
}

.line {
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: .1rem;
  height: 15rem;
  color: #fff;
  background-color: #ed0000;
  transform: scale(0);
  transform-origin: top center;
  animation: scaleUp 1500ms linear forwards;

  &::after {
    content: '1234';
    display: block;
    position: absolute;
    left: .5rem;
    bottom: 0;
    font-family: monospace;
    color: #fff;
  }
}

.line-1 {
  height: 25rem;
}

.line-2 {
  height: 17rem;
}
.line-3 {
  height: 14rem;
}

.line-4 {
  height: 22rem;
}
.line-5 {
  height: 11rem;
}
.sphere {
  position: absolute;
  top: -20rem;
  left: -1rem;
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #7ad4f8;
  opacity: .7;
  animation: drop 6000ms linear infinite;

  &.small {
    width: 1rem;
    height: 1rem;
    left: -.5rem;
  }

  &.large {
    width: 2rem;
    height: 2rem;
    left: -1rem;
  }

  &.sphere-1 {
    animation-delay: 0ms;
  }
  &.sphere-2 {
    animation-delay: 1250ms;
  }
  &.sphere-3 {
    animation-delay: 4000ms;
  }

  &.sphere-4 {
    animation-delay: 500ms;
  }
  &.sphere-5 {
    animation-delay: 1000ms;
  }
  &.sphere-6 {
    animation-delay: 2500ms;
  }

  &.slow {
    animation-duration: 8000ms;
  }

  &.fast {
    animation-duration: 4000ms;
  }
}

.number {
  position: absolute;
  bottom: -1.2rem;
  left: 1rem;
}
</style>
