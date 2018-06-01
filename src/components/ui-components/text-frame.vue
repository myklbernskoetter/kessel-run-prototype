<template lang="html">
  <div class="component-wrapper">
    <div class="text-container text-container-square">
      <span class="text">text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum</span>
    </div>

    <div class="text-container text-container-rounded">
      <span class="bracket bracket-left"></span>
      <span class="text">text lorem ipsum</span>
      <span class="bracket bracket-right"></span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@keyframes flicker-on-1 {
  0% {
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  15% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  55% {
    opacity: 1;
  }

  57% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  76% {
    opacity: 1;
  }

  99% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes frame-left-expand {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-3rem);
  }
}

@keyframes frame-right-expand {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(3rem);
  }
}

.text-container {
  opacity: 0;
  animation: flicker-on-1 750ms linear 5000ms forwards;
}

  .text-container-square {
    position: absolute;
    top: 5rem;
    right: 15rem;
    color: #fff;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      display: block;
      width: .5rem;
      height: 10rem;
      border: .1rem solid #fff;
    }

    &::before {
      left: -2.5rem;
      border-right: 0;
      animation: frame-left-expand 500ms 5500ms linear forwards;
    }
    &::after {
      right: -2.5rem;
      border-left: 0;
      animation: frame-right-expand 500ms 5500ms linear forwards;
    }
  }

  .text-container-rounded {
    position: absolute;
    top: 5rem;
    left: 15rem;
    .bracket {
      position: absolute;
      top: 0;
      display: block;
      border: .1rem solid #fff;
      width: 1rem;
      height: 10rem;

      &::before,
      &::after {
        content: '';
        position: absolute;
        display: block;
        width: .5rem;
        height: .5rem;
        background-color: #fff;
        border-radius: 50%;
      }
    }

    .bracket-left {
      left: 0;
      border-top-left-radius: 10rem;
      border-bottom-left-radius: 10rem;
      border-right: 0;
      animation: frame-left-expand 500ms 5500ms linear forwards;

      &::before {
        top: -5px;
        left: 16px;
      }
      &::after {
        bottom: -3px;
        right: -8px;
      }
    }

    .bracket-right {
      right: 0;
      border-top-right-radius: 10rem;
      border-bottom-right-radius: 10rem;
      border-left: 0;
      animation: frame-right-expand 500ms 5500ms linear forwards;

      &::before {
        top: -5px;
        left: -8px;
      }
      &::after {
        bottom: -4px;
        right: 15px;
      }
    }
  }

  .text {
    display: block;
    width: 100%;
    max-width: 20rem;
    color: #fff;
    transform: scale(0);
    animation: scaleUp 250ms linear forwards;
    animation-delay: 5750ms;
  }
</style>
