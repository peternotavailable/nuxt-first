<template>
    <div>
        <h2>{{ error.statusCode }}</h2>
        <p>{{ error.statusMessage }}</p>
        <button @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({ redirect: '/' })
</script>

<style lang="scss" scoped>
div {
    text-align: center;
}
</style>