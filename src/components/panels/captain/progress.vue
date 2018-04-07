<template lang="html">
<div class="">
  <h2>Progress</h2>
  <div class="progress-bar">
    <div class="progress-indicator" v-bind:style="{width: percentage + '%'}"></div>
  </div>
  <div class="progress-percentage">
    <span>{{percentage}}</span>
  </div>
  <div class="progress-description">
    <p>Monitor your team's progress right here</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
    percentage: 31,
    }
  },
}
</script>

<style lang="scss">
  .progress-bar {
    width: 70rem;
    height: 5rem;
    border: .3rem solid #fff;
    overflow: hidden;
  }

  .progress-indicator {
    display: inline-block;
    height: 100%;
    background-color: #fff;
    transition: width 500ms;
  }

  .progress-percentage {
    color: #fff;

    &::after {
      content: '%';
      display: inline-block;
    }
  }
</style>
