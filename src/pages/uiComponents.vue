<template>
  <div class="container" v-cloak>
    <slot></slot>
    <main-layout>
      <app-uicomponents></app-uicomponents>
    </main-layout>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Puzzle.vue';
  import uiComponents from '../components/ui-components/all.vue';
  export default {
    components: {
      'app-uicomponents': uiComponents,
      MainLayout
    }
  }
</script>

<style lang="scss">

</style>
