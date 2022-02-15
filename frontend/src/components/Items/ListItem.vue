<template>
    <div class="list-item">
        <p>{{ product.name }}</p>
        <p class="tag">{{ product.area }}</p>
        <p>{{ product.quantity }}</p>
        <p>{{ calculateExpiry(product.expiry) }} days</p>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Product } from '../../types'

export default defineComponent({
    props: {
        product: Object as PropType<Product>
    },
    methods: {

        calculateExpiry(expiry: Date) {
            const dateToday = new Date;

            const diffTime = Math.abs(expiry.valueOf() - dateToday.valueOf());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

            return diffDays;
        }

    }
})
</script>

<style scoped>

.list-item {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.2);
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    grid-gap: 4rem;
    align-items: center;
}

.tag {
    padding: 7px 10px 7px 10px;
    border-radius: 8px;
    color: white;
    background-color: var(--yellow);
    text-align: center;
}

.list-item > p:not(:first-child) {
    text-align: center
}

</style>