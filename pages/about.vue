<template>
    <div>
        <h2>About</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam reprehenderit adipisci natus? Eveniet sed accusantium facere consectetur porro nulla repudiandae?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam reprehenderit adipisci natus? Eveniet sed accusantium facere consectetur porro nulla repudiandae?</p>
        <div>{{ data.GBP.code }} - {{ data.GBP.value }}</div>

    </div>
</template>

<script setup>
  const { data } = await useFetch('/api/currency/GBP')
  // , {
  //   method: 'get'
  // })
</script>

<style lang="scss" scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>