<template>
  <div>
    <main-layout></main-layout>
    <app-generator></app-generator>
  </div>
</template>

<script>
  import MainLayout from '../layouts/Puzzle.vue';
  import Generator from '../components/generator/all.vue';
  export default {
    components: {
      'app-generator': Generator,
      MainLayout
    }
  }
</script>
