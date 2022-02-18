<template>
    <div class="pantry-view">
        Hi this is the {{ name }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pantry',
    setup() {
        let title = 'Pantry overview'

        return {
            name: title
        }
    }
})
</script>