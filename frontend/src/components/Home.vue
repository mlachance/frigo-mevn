<template>
  <div class="container">

    <h1>Hello, Marianne</h1>

    <div class="search-filter-add">
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
import ListView from './Views/ListView.vue'

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

</style>