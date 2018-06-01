<template lang="html">
  <div class="component-wrapper">
    <div class="hexagons-wrapper">
      <div class="hex-row first">
        <span class="hex top"></span>
        <span class="hex top"></span>
        <span class="hex top"></span>
      </div>
      <div class="hex-row even">
        <span class="hex middle"></span>
        <span class="hex middle"></span>
      </div>
      <div class="hex-row last">
        <span class="hex bottom"></span>
        <span class="hex bottom"></span>
        <span class="hex bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

@keyframes blink {
  0% {
    background-color: #fff;
  }
  49% {
    background-color: #fff;
  }
  50% {
    background-color: #7ad4f8;
  }

  60% {
    background-color: #7ad4f8;
  }

  70% {
    background-color: #fff;
  }

  100% {
    background-color: #fff;
  }
}

@keyframes blink2 {
  0% {
    border-bottom: 30px solid #fff;
  }
  49% {
    border-bottom: 30px solid #fff;
  }
  50% {
    border-bottom: 30px solid #7ad4f8;
  }

  60% {
    border-bottom: 30px solid #7ad4f8;
  }

  70% {
    border-bottom: 30px solid #fff;
  }

  100% {
    border-bottom: 30px solid #fff;
  }
}

@keyframes blink3 {
  0% {
    border-top: 30px solid #fff;
  }
  49% {
    border-top: 30px solid #fff;
  }
  50% {
    border-top: 30px solid #7ad4f8;
  }

  60% {
    border-top: 30px solid #7ad4f8;
  }

  70% {
    border-top: 30px solid #fff;
  }

  100% {
    border-top: 30px solid #fff;
  }
}

.hex {
  --color-grey: #494d50;
  --color-blue: #7ad4f8;
  display: inline-block;
  margin-top: 30px;
  width: 104px;
  height: 60px;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  animation: blink 5000ms linear infinite;

    &::before {
      animation: blink2 5000ms linear infinite;
    }

    &::after {
      animation: blink3 5000ms linear infinite;
    }

  &:hover,
  &:focus {
    background-color: var(--color-blue);
    transition: all 250ms;
    animation: none;

    &::before {
      border-bottom: 30px solid var(--color-blue);
      transition: all 250ms;
      animation: none;
    }
    &::after {
      border-top: 30px solid var(--color-blue);
      transition: all 250ms;
      animation: none;
    }
  }
}

.hex:before {
  content: " ";
  width: 0; height: 0;
  border-bottom: 30px solid #fff;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
  position: absolute;
  top: -30px;
}

.hex:after {
  content: "";
  width: 0;
  position: absolute;
  bottom: -30px;
  border-top: 30px solid #fff;
  border-left: 52px solid transparent;
  border-right: 52px solid transparent;
}

.hex-row {
  position: relative;
  clear: left;
}

.hex-row.first {
  z-index: 3;
}
.hex-row.even {
  transform: translateX(54px);
  z-index: 1;
}

.hex-row.last {
  z-index: 3;
}
</style>
