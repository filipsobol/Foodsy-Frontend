<template>
    <div class="min-h-screen font-sans flex flex-col">
        <Header />

        <nuxt />

        <Footer />
    </div>
</template>

<script>
import Header from "~/components/Page/Header.vue";
import Footer from "~/components/Page/Footer.vue";

export default {
    components: {
        Header,
        Footer,
    },
};
</script>

<style>
* {
    font-family: 'Source Sans Pro', sans-serif;
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
