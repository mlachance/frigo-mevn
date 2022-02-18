<template>
  <div class="app">
    <Sidebar />
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Sidebar from './components/Sidebar.vue';
import Home from './components/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Sidebar,
    Home
  }
});
</script>

<style>

.app {
  display: grid;
  grid-template-columns: 1fr 4fr;
}

</style>
