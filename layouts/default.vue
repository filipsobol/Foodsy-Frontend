<template>
    <div class="min-h-screen font-sans flex flex-col">
        <Header />

        <nuxt />
    </div>
</template>

<script>
import Header from "~/components/Page/Header.vue";

export default {
    components: {
        Header,
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
