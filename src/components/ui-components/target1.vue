<template lang="html">
  <div class="component-wrapper">
    <div class="target">
      <span class="line vertical"></span>
      <span class="line horizontal">
        <span class="reticule">
          <span class="inner-circle"></span>
          <button @click="" class="outer-circle"></button>
        </span>
      </span>
    </div>
    <div class="target target2">
      <span class="line vertical"></span>
      <span class="line horizontal">
        <span class="reticule">
          <span class="inner-circle"></span>
          <button @click="" class="outer-circle"></button>
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
.target {
  padding: 0 5rem 5rem;
  .line {
    display: block;
    background-color: #ed0000;
    transform: scale(0);
  }

  .horizontal {
    width: 15rem;
    height: .1rem;
    animation: scaleUp 500ms linear forwards;
    animation-delay: 2500ms;
    transform-origin: bottom left;
    &::after {
      content: '';
      position: absolute;
      top: -.2rem;
      right: -.4rem;
      display: block;
      width: .3rem;
      height: .3rem;
      border: .075rem solid #fff;
      transform: rotate(45deg);
      opacity: 0;
      animation: opacity 500ms linear forwards;
      animation-delay: 3250ms;
    }
  }

  .vertical {
    width: .1rem;
    height: 25rem;
    animation: scaleUp 500ms linear forwards;
    animation-delay: 2000ms;
    transform-origin: top;
  }

  .reticule {
    position: absolute;
    top: -1.75rem;
    right: -2rem;
    transform: scale(0);
    animation: scaleUp 500ms linear 3000ms forwards;
    transform-origin: center;
  }

  .outer-circle {
    position: relative;
    display: block;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    border: .05rem solid #fff;
    animation: target1-rotation 8000ms linear infinite;
    background-color: transparent;
    cursor: pointer;
    z-index: 1;

    &::before,
    &::after {
      position: absolute;
      content: '';
      display: block;
      width: 30%;
      height: 30%;
      border-top: .2rem solid #fff;
      border-radius: 40%;
    }

    &::before {
      top: 1rem;
      right: 1rem;
      transform: rotate(90deg) translateY(-50%);
    }

    &::after {
      top: 1rem;
      left: 1rem;
      transform: rotate(-90deg) translateY(-50%);
    }
  }

  .inner-circle {
    position: absolute;
    top: 17px;
    left: 17px;
    display: block;
    width: 1.5rem;
    height: 1.5rem;
    opacity: .35;
    border-radius: 50%;
    box-shadow: .1rem .7rem 5.4rem .2rem rgba(237,0,0,1) inset;
  }
}

.target2 {
  position: absolute;
  top: 20rem;
  right: 0;
  transform: rotateY(180deg) rotate(-90deg);
}

</style>
