<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/">Dojo</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
            </nav>
        </header>
        <!-- output the page content -->
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
    background: lightgrey;
    color: #000;
    > nav {
        display: flex;
        list-style: none;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;
        > a {
            text-decoration: none;
            color: #000;
            margin-left: 1rem;
        }
        .router-link-exact-active {
                color: cadetblue;
                background: #eee;
        }
        > ul {
            display: flex;
            list-style: none;
            gap: 1rem;
            margin-right: 1rem;
            > li {
                > a {
                    text-decoration: none;
                    color: #000;
                }
            }
            .router-link-exact-active {
                color: cadetblue;
            }

        }
    }
}
</style>