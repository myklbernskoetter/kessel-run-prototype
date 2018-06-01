<template lang="html">
<div class="component-wrapper">
  <div class="button-wrapper">
    <button type="button" name="button">
      <span class="circle-1 circle">
        <span class="circle-2 circle">
          <span class="circle-3 circle">
            <span class="icon">icon1</span>
          </span>
        </span>
      </span>
    </button>
    <button type="button" name="button">
      <span class="circle-1 circle">
        <span class="circle-2 circle">
          <span class="circle-3 circle">
            <span class="icon">icon2</span>
          </span>
        </span>
      </span>
    </button>
    <button type="button" name="button">
      <span class="circle-1 circle">
        <span class="circle-2 circle">
          <span class="circle-3 circle">
            <span class="icon">icon3</span>
          </span>
        </span>
      </span>
    </button>
    <button type="button" name="button">
      <span class="circle-1 circle">
        <span class="circle-2 circle">
          <span class="circle-3 circle">
            <span class="icon">icon4</span>
          </span>
        </span>
      </span>
    </button>
  </div>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@keyframes pop1 {
  0% {
    transform: scale(0);
  }

  70% {
    transform: scale(1.15);
  }

  100% {
    transform: scale(1);
  }
}

button {
  width: 6rem;
  height: 6rem;
  border: 0;
  background-color: transparent;
  transition: 250ms;
  cursor: pointer;

  &:hover,
  &:focus {
    .circle-1{
      background-color: #7ad4f8;
    }
  }

  &:nth-child(2) {
    .circle {
      animation-delay: 1000ms;
    }
    .circle-2 {
      animation-delay: 1500ms;
    }

    .circle-3 {
      animation-delay: 1750ms;
    }

    .icon {
      animation-delay: 2250ms;
    }
  }
  &:nth-child(3) {
    .circle {
      animation-delay: 2000ms;
    }
    .circle-2 {
      animation-delay:2500ms;
    }

    .circle-3 {
      animation-delay: 2750ms;
    }

    .icon {
      animation-delay: 3250ms;
    }
  }
  &:nth-child(4) {
    .circle {
      animation-delay: 3000ms;
    }
    .circle-2 {
      animation-delay: 3500ms;
    }

    .circle-3 {
      animation-delay: 3750ms;
    }

    .icon {
      animation-delay: 4250ms;
    }
  }
}

.circle {
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle-1 {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background-color: #fff;
  transform: scale(0);
  animation: pop1 250ms ease-out forwards;
}

.circle-2 {
  width: 5.25rem;
  height: 5.25rem;
  border-radius: 50%;
  background-color: #000;
  transform: scale(0);
  animation: pop1 250ms ease-out 250ms forwards;
}

.circle-3 {
  border-radius: 50%;
  width: 3.75rem;
  height: 3.75rem;
  background-color: #fff;
  transform: scale(0);
  animation: pop1 250ms ease-out 500ms forwards;
}

.icon {
  transform: scale(0);
  animation: pop1 250ms linear 1000ms forwards;
}
</style>
