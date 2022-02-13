<template>
  <div class="app">
    <Sidebar />
    <Overview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Overview from './components/Overview.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Overview
  }
});
</script>

<style>

.app {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

</style>
