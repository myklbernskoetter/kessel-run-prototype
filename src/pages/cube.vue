<template>
  <div>
    <main-layout></main-layout>
    <app-cube></app-cube>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Puzzle.vue';
  import Cube from '../components/cube/all.vue';
  export default {
    components: {
      'app-cube': Cube,
      MainLayout
    }
  }
</script>
