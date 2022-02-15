<template>
    <div class="list-item">
        <p>{{ title }}</p>
        <p>{{ area }}</p>
        <p>{{ quantity }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            title: "Banana" as string,
            area: "Pantry" as string,
            quantity: 4 as number
        }
    }
})
</script>

<style scoped>

.list-item {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr 1fr;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.2);
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

</style>