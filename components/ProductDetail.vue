<template>
    <div>
        <p>{{ product.title }}</p>
        <img :src="product.image">
        <p>price: {{ product.price }}</p>
        <p>description: {{ product.description }}</p>
        <p>category: {{ product.category }}</p>
        <p>rating: {{ product.rating.rate }}</p>
        
        <button>
            <i class="material-icons">add_shopping_cart</i>
            <span>Add to cart</span>
        </button>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
div {
    > img {
        width: 50%;
    }
}
</style>