<template>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam reprehenderit adipisci natus? Eveniet sed accusantium facere consectetur porro nulla repudiandae?</p>
        <p>{{ $t('hello') }}, {{ $t('language') }} is {{ $t('english') }} or {{ $t('mandarin') }}</p>
        <p>{{ locale }}</p>
        <button @click="setLocale('en')">switch to English</button>
        <button @click="setLocale('zh')">switch to Mandarin</button>
    </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { locale, setLocale } = useI18n()
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