<template>
  <div>
    <main-layout></main-layout>
    <app-radar></app-radar>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Puzzle.vue';
  import Radar from '../components/radar/all.vue';
  export default {
    components: {
      'app-radar': Radar,
      MainLayout
    }
  }
</script>
