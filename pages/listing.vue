<template>
    <div class="container mx-auto my-12">
        <div class="flex lg:flex-row flex-col -mx-2">
            <form class="lg:w-3/12 w-full px-2">
                <div>
                    <h4>Kategorie</h4>

                    <Checkbox
                        v-for="category in categories"
                        :key="category.value"
                        v-model="form.categories"
                        :label="category.label"
                        :input-value="category.value" />
                </div>

                <div class="mt-4">
                    <h4>Dieta</h4>

                    <Checkbox
                        v-for="diet in diets"
                        :key="diet.value"
                        v-model="form.diets"
                        :label="diet.label"
                        :input-value="diet.value" />
                </div>

                <button
                    type="submit"
                    class="bg-gray-300 text-gray-700 px-6 py-2 mt-6 rounded flex flex-row items-center">
                    Zastosuj
                </button>
            </form>

            <div class="lg:w-9/12 w-full px-2 flex flex-col">
                <div class="flex flex-row">
                    <label class="lg:w-6/12 search">
                        <span class="icon">
                            <svg>
                                <use xlink:href="/icons/sprite.svg#search" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Szukaj po nazwie...">
                    </label>

                    <div class="lg:w-6/12 s flex flex-row items-center justify-end">
                        <span class="mr-4">Sortuj:</span>

                        <Select
                            :options="sortBy"
                            v-model="form.sortBy" />
                    </div>
                </div>

                <div class="flex flex-col">
                    <div>123</div>
                    <div>123</div>
                    <div>123</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Checkbox from "../components/common/Checkbox.vue";
import Select from "../components/common/Select.vue";

export default {
    components: {
        Checkbox,
        Select
    },

    data: () => ({
        categories: [
            {
                label: "Kanapki",
                value: "kanapki"
            },
            {
                label: "Obiady",
                value: "obiady"
            },
            {
                label: "Desery",
                value: "desery"
            },
            {
                label: "Dodatki",
                value: "dodatki"
            },
        ],
        diets: [
            {
                label: "Wegetariańska",
                value: "wegetarianska"
            },
            {
                label: "Wegańska",
                value: "weganska"
            },
            {
                label: "Bezglutenowa",
                value: "bezglutenowa"
            }
        ],
        sortBy: [
            {
                value: "name_asc",
                label: "Alfabetycznie [A-Z]",
            },
            {
                value: "name_desc",
                label: "Alfabetycznie [Z-A]",
            },
            {
                value: "price_asc",
                label: "Po cenie (rosnąco)",
            },
            {
                value: "price_desc",
                label: "Po cenie (malejąco)",
            },
        ],

        form: {
            categories: [],
            diets: [],
            sortBy: "",
        }
    })
};
</script>

<style lang="scss" scoped>
.search {
    @apply relative;
    @apply flex;

    .icon {
        @apply absolute;
        @apply text-gray-400;

        left: 8px;
        top: 5px;
    }

    input {
        @apply w-full;
        @apply pl-12;
        @apply pr-2;
        @apply py-1;
        @apply rounded-sm;
        @apply border;
        @apply border-gray-400;

        &::placeholder {
            @apply text-gray-500;
        }
    }
}
</style>
