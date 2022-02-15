<template>
  <div class="overview">
    <h1>Hello, Marianne</h1>
    <SearchFilter />
    <Add />
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

</style>