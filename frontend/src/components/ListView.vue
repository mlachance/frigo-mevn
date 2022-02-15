<template>
    <div class="list-view">
        <div class="list-heading">
            <p>Item</p>
            <p>Area</p>
            <p>Quantity</p>
        </div>
        <ListItem />
        <ListItem />
        <ListItem />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from './Items/ListItem.vue'

export default defineComponent({
    components: {
        ListItem
    }
})
</script>

<style scoped>

.list-heading {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr 1fr;
    font-weight: bold;
    color: var(--light-green);
    margin: 2rem 0 2rem 0;
}

</style>