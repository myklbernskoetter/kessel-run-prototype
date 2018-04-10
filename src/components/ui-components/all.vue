<template lang="html">
  <div class="ui-components">
    <app-hal></app-hal>
    <app-dnaSpinner></app-dnaSpinner>
    <app-frames></app-frames>
    <app-target1></app-target1>
    <app-globe1></app-globe1>
    <app-background-grid></app-background-grid>
  </div>
</template>

<script>
import dnaSpinner from './dna-spinner.vue';
import frames from './frames.vue';
import target1 from './target1.vue';
import globe1 from './globe1.vue';
import grid from './background-grid.vue';
import hal from './hal.vue';

export default {
  components: {
    'app-dnaSpinner': dnaSpinner,
    'app-frames': frames,
    'app-target1': target1,
    'app-globe1': globe1,
    'app-background-grid': grid,
    'app-hal': hal,
 }
}
</script>

<style lang="scss" scoped>

.ui-components {
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .1;
  }
}
</style>
