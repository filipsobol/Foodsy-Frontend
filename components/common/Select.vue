<template>
    <div>
        <select
            :value="value"
            @input="$emit('input', $event.target.value)">
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value">
                {{ option.label }}
            </option>
        </select>

        <Icon name="chevron-down" />
    </div>
</template>

<script>
import Icon from "../common/Icon.vue";

export default {
    components: {
        Icon
    },

    props: {
        options: {
            required: true,
            type: Array,
        },
        value: {
            required: true,
            type: String,
        },
    },

    created() {
        if (!this.value) {
            this.$emit("input", this.options[0].value);
        }
    }
};
</script>

<style lang="scss" scoped>
div {
    @apply relative;
}

select {
    @apply py-2;
    @apply pl-2;
    @apply pr-8;
    @apply border;
    @apply border-gray-400;
    @apply rounded-sm;

    appearance: none;
    user-select: none;
}

svg {
    @apply absolute;
    @apply z-10;
    @apply h-5;
    @apply w-5;

    right: 0.6rem;
    top: 0.75rem;
}
</style>
