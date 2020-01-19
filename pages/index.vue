<template>
    <div>
        <HowItWorks />
        <MobileApp />
        <Blog />
    </div>
</template>

<script>

import HowItWorks from "~/components/Index/HowItWorks.vue";
import MobileApp from "~/components/Index/MobileApp.vue";
import Blog from "~/components/Index/Blog.vue";

export default {
    components: {
        HowItWorks,
        MobileApp,
        Blog
    },
};
</script>
