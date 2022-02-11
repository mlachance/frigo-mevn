<template>
  <Sidebar />
  <Overview />
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

</style>
