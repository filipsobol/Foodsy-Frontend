<template>
    <label class="checkbox">
        <input
            :value="inputValue"
            :checked="checked"
            @change="toggle($event.target.value)"
            type="checkbox"
            class="form-checkbox text-pink-600">

        <svg>
            <use xlink:href="/icons/sprite.svg#check" />
        </svg>

        <span class="ml-2">{{ label }}</span>
    </label>
</template>

<script>
export default {
    props: {
        value: {
            required: true,
            type: [
                Boolean,
                Array
            ],
        },
        inputValue: {
            default: "",
            type: String,
        },
        label: {
            required: true,
            type: String,
        }
    },

    computed: {
        checked() {
            return typeof this.value === "boolean"
                ? this.value
                : this.value.includes(this.inputValue);
        }
    },

    methods: {
        toggle(value) {
            if (typeof this.value === "boolean") {
                return this.$emit("input", !this.checked);
            }

            if (this.value.includes(value)) {
                return this.$emit("input", this.value.filter(val => val !== value));
            }

            return this.$emit("input", [...this.value, this.inputValue]);
        }
    }
};
</script>

<style lang="scss" scoped>
label {
    &.checkbox {
        @apply flex;
        @apply flex-row;
        @apply items-center;
        @apply relative;
        @apply cursor-pointer;

        input {
            @apply inline-block;
            @apply w-5;
            @apply h-5;
            @apply mr-2;
            @apply bg-white;
            @apply border;
            @apply rounded-sm;

            appearance: none;
            user-select: none;

            &:hover + svg {
                @apply text-gray-300;
            }

            &:checked {
                @apply border-gray-600;

                & + svg {
                    @apply text-gray-600;
                }
            }

            &:hover,
            &:checked {
                & + svg {
                    @apply block;
                    @apply absolute;
                    @apply w-4;
                    @apply h-4;

                    top: .25rem;
                    left: .15rem;
                    stroke-width: 3;
                }
            }
        }

        svg {
            @apply hidden;
        }

        span {
            @apply text-gray-900;
        }
    }

    & + label {
        @apply mt-1;
    }
}
</style>
