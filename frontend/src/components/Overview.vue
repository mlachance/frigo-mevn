<template>
  <div class="overview">

    <h1>Hello, Marianne</h1>

    <div class="controls">
      <SearchFilter />
      <Add />
    </div>

    <ListView />

  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchFilter from './Items/SearchFilter.vue'
import Add from './Items/Add.vue'
import ListView from './ListView.vue'

export default defineComponent({
  name: 'App',
  components: {
    SearchFilter,
    Add,
    ListView
  }
})
</script>

<style scoped>

.overview {
  margin: 3rem;
}

.controls {
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr;
}

</style>