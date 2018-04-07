<template>
  <div>
    <main-layout></main-layout>
    <app-light-array></app-light-array>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Puzzle.vue';
  import LightArray from '../components/light-array/all.vue';
  export default {
    components: {
      'app-light-array': LightArray,
      MainLayout
    }
  }
</script>
