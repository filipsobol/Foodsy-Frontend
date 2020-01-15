<template>
    <div>
        <Search />
        <HowItWorks />
        <MobileApp />
        <Blog />
    </div>
</template>

<script>
import Search from "~/components/Index/Search.vue";
import HowItWorks from "~/components/Index/HowItWorks.vue";
import MobileApp from "~/components/Index/MobileApp.vue";
import Blog from "~/components/Index/Blog.vue";

export default {
    components: {
        Search,
        HowItWorks,
        MobileApp,
        Blog
    },
};
</script>
