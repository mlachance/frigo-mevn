<template>
    <div class="sidebar">
        <router-link to="/">
            <img class="logo" src="../assets/Logo.svg" alt="Frigo - grocery management">
        </router-link>
        <nav>
            <ul>
                <li><router-link to="/pantry">Pantry</router-link></li>
                <li><router-link to="/recipes">Recipes</router-link></li>
                <li>Meal Plan (tbd)</li>
                <li>Shopping List (tbd)</li>
                <li>Unit Converter (tbd)</li>
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

a {
    text-decoration: none;
    color: white;
}


</style>