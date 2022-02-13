<template>
    <div class="sidebar">
        <img class="logo" src="../assets/Logo.svg" alt="Frigo - grocery management">
        <nav>
            <ul>
                <li>Pantry</li>
                <li>Recipes</li>
                <li>Meal Plan</li>
                <li>Shopping List</li>
                <li>Unit Converter</li>
            </ul>
        </nav>
        <img class="bg-pattern" src="../assets/bg.svg" alt="Frigo - grocery management">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped>

.sidebar {
    background-color: var(--light-green);
    color: var(--white);
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
}

.logo {
    width: 40%;
    margin: 3rem auto 3rem 10%;
}


</style>