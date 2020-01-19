<template>
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
</template>

<script>
export default {
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
select {
    appearance: none;
    user-select: none;
}
</style>
