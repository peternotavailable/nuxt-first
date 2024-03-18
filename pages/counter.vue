<template>
    <div>
        <span>{{ counterStore.count }}</span> - 
        <span>{{ counterStore.doubleCount }}</span>
      <div>
        <button @click="counterStore.increment">increment</button>
        <button @click="counterStore.decrement">decrement</button>
      </div>
    </div>
</template>

<script setup>
    const counterStore = useCounterStore()
</script>

<style lang="scss" scoped>

</style>