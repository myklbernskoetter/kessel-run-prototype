<template lang="html">
  <div class="ui-components">
    <app-background-grid></app-background-grid>
    <!-- <app-frames></app-frames> -->
    <app-text-frame></app-text-frame>
    <app-dnaSpinner></app-dnaSpinner>
    <!-- <app-curtain></app-curtain> -->
    <!-- <app-target1></app-target1> -->
    <app-globe1></app-globe1>
    <!-- <app-globe2></app-globe2>
    <app-globe3></app-globe3> -->
    <!-- <app-hexagons style="margin-bottom: 2.5rem;"></app-hexagons> -->
    <!-- <app-buttons></app-buttons> -->
  </div>
</template>

<script>
import dnaSpinner from './dna-spinner.vue';
import frames from './frames.vue';
import target1 from './target1.vue';
import globe1 from './globe1.vue';
import globe2 from './globe2.vue';
import globe3 from './globe3.vue';
import grid from './background-grid.vue';
import hal from './hal.vue';
import textFrame from './text-frame.vue';
import curtain from './shower-curtain.vue';
import hexagons from './hexagons.vue';
import buttons from './buttons.vue';

export default {
  components: {
    'app-dnaSpinner': dnaSpinner,
    'app-frames': frames,
    'app-target1': target1,
    'app-globe1': globe1,
    'app-globe2': globe2,
    'app-globe3': globe3,
    'app-background-grid': grid,
    'app-hal': hal,
    'app-text-frame': textFrame,
    'app-curtain': curtain,
    'app-hexagons': hexagons,
    'app-buttons': buttons,
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
