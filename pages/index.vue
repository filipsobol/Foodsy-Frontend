<template>
    <div class="min-h-screen bg-gray-100 font-sans flex flex-col">
        <Header />
        <Search />
    </div>
</template>

<script>
import Header from "~/components/Page/Header.vue";
import Search from "~/components/Page/Search.vue";

export default {
    components: {
        Header,
        Search
    },
};
</script>

<style>

</style>
