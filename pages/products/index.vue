<template>
    <div>
        <div class="products">
            <div v-for="(p, keys) in products" :key="keys" class="product">
                <ProductCard :product="p" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    
    useHead({
        title: 'Dojo Products', 
        meta: [
            { name: 'description', content: 'Everything about products'}
        ]
    })
</script>

<style lang="scss" scoped>
div {
    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        text-align: center;
    }
}
</style>