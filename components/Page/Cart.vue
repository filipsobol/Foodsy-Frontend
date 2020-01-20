<template>
    <a href="/">
        <Icon name="shopping-bag" />
    </a>
</template>

<script>
import Icon from "../common/Icon.vue";

export default {
    components: {
        Icon,
    },
};
</script>

<style lang="scss" scoped>
a {
    @apply fixed;
    @apply bg-green-500;
    @apply p-4;
    @apply rounded-full;

    right: 1.5rem;
    bottom: 1.5rem;

    svg {
        @apply text-green-200;
    }
}

@media (min-width: 1024px) {
    a {
        @apply hidden;
    }
}
</style>
