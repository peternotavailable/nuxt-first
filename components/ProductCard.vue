<template>
    <div>
        <NuxtLink :to="`/products/${product.id}`">
            <p>{{ product.title }}</p>
            <img :src="product.image">

        </NuxtLink>
    </div>
</template>

<script setup>
    const { product } = defineProps(['product'])
</script>

<style lang="scss" scoped>
div {
    > a {
        > img {
                width: 80%;
        }
    }
}

</style>