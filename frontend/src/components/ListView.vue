<template>
    <div class="list-view">
        <div class="list-heading">
            <h3>Item</h3>
            <h3 class="tag-heading">Area</h3>
            <h3>Quantity</h3>
            <h3>Expires in</h3>
        </div>
        <ListItem v-for="item in productsList" :key="item" :product="item" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from './Items/ListItem.vue'
import { Product } from '../types'

export default defineComponent({
    components: {
        ListItem
    },
    data () {
        return {

            productsList: [

                {
                    id: 1235,
                    name: 'Banana',
                    area: 'Pantry',
                    quantity: 2,
                    unit: 'pcs',
                    expiry: new Date("2022-02-16"),
                    onShoppingList: false
                } as Product,

                {
                    id: 1234,
                    name: 'Yogurt',
                    area: 'Fridge',
                    quantity: 1,
                    unit: 'pcs',
                    expiry: new Date("2022-03-01"),
                    onShoppingList: false
                } as Product

            ]

        }
    }
})
</script>

<style scoped>

.list-heading {
    margin: 2rem 0 1rem 0;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 10px;
    grid-gap: 4rem;
    align-items: center;
}

.list-heading > h3:not(:first-child) {
    text-align: center
}

</style>