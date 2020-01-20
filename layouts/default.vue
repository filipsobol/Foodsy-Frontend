<template>
    <div class="min-h-screen font-sans flex flex-col">
        <Header />
        <Search />

        <nuxt />

        <Footer />
        <Cart /> <!-- TODO: Show only if there are items in the cart -->
    </div>
</template>

<script>
import Header from "~/components/Page/Header.vue";
import Search from "~/components/Index/Search.vue";
import Footer from "~/components/Page/Footer.vue";
import Cart from "~/components/Page/Cart.vue";

export default {
    components: {
        Header,
        Search,
        Footer,
        Cart,
    },
};
</script>

<style>
* {
    font-family: "Source Sans Pro", sans-serif;
}

svg {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: none;
}
</style>
