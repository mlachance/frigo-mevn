<template>
    <div class="card-view">
        <h3>Recipes</h3>
        <div class="card-grid">
            <CardItem v-for="recipe in recipeList" :key="recipe.name" :recipe="recipe" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import CardItem from '../Items/CardItem.vue'
import { Recipe } from '../../types'

export default defineComponent({
    components: {
        CardItem
    },
    setup() {

        const recipeList = ref([
                {
                    id: 1,
                    name: 'Lentil Bolognese',
                    description: 'A veganized Italian classic.',
                    img: 'https://rainbowplantlife.com/wp-content/uploads/2020/04/red-lentil-bolognese-twirling-pasta-1.png',
                    categories: ['Vegan', 'Pasta'],
                    ingredients: ['Garlic', 'Onion', 'Tomato', 'Lentils'],
                    instructions: ['Peel and cut garlic and onion.', 'Cook the sauce, serve with pasta.'],
                } as Recipe,
                {
                    id: 1,
                    name: 'Miso Aubergine with a lot of text in the title',
                    description: 'Delicious smoky flavor directly produced in the oven.',
                    img: 'https://schlaraffenwelt.de/wp-content/uploads/2020/08/auberginen.jpg',
                    categories: ['Vegan', 'Rice'],
                    ingredients: ['Aubergine', 'Miso', 'Soy sauce', 'Rice'],
                    instructions: ['Cut aubergine into half, score and brush with miso.', 'Broil in the oven, serve with rice and sesame seeds.'],
                } as Recipe,
            ])

        return {
            recipeList
        }
    }
})
</script>

<style scoped>

.card-grid {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
}

</style>