<template>
    <div>
        <Head>
            <Title>Nuxt Dojo ! {{ product.title }}</Title>
            <Meta name="discription" :content="product.description" />
        </Head>

        <ProductDetail :product="product" />
    </div> 
</template>

<script setup>
    const { id } = useRoute().params
    const uri = `https://fakestoreapi.com/products/${id}`

    const { data: product } = await useFetch(uri, {key: id})

    if(!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found...', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })

</script>

<style lang="scss" scoped>
div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-size:  1rem;
    align-items: center;
}
</style>