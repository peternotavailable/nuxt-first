<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Dojo Merch</NuxtLink>
            </nav>
        </header>
        <!-- output the page content -->
        <div>
            <slot />
        </div>

        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  const { locale } = useI18n()

</script>

<style lang="scss" scoped>
header {
    > nav {
        > a {
            color: cadetblue;
            text-decoration: none;
        }
        .router-link-exact-active {
            color: chocolate;
            text-decoration: none;
        }
    }
}
footer {
    > ul {
        .router-link-exact-active {
            color: cadetblue;
            text-decoration: none;
        }
    }
}
</style>