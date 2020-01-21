<template>
    <div class="container mx-auto my-12">
        <div class="flex lg:flex-row flex-col -mx-2">
            <form class="lg:w-3/12 w-full px-2">
                <div>
                    <h4 class="mb-1 font-semibold uppercase tracking-wide">
                        Kategorie
                    </h4>

                    <Checkbox
                        v-for="category in categories"
                        :key="category.value"
                        v-model="form.categories"
                        :label="category.label"
                        :input-value="category.value" />
                </div>

                <div class="mt-6">
                    <h4 class="mb-1 font-semibold uppercase tracking-wide">
                        Dieta
                    </h4>

                    <Checkbox
                        v-for="diet in diets"
                        :key="diet.value"
                        v-model="form.diets"
                        :label="diet.label"
                        :input-value="diet.value" />
                </div>

                <div class="mt-6">
                    <h4 class="mb-1 font-semibold uppercase tracking-wide">
                        Catering
                    </h4>

                    <Checkbox
                        v-for="company in companies"
                        :key="company.value"
                        v-model="form.companies"
                        :label="company.label"
                        :input-value="company.value" />
                </div>

                <button
                    type="submit"
                    class="bg-gray-300 text-gray-700 px-6 py-2 mt-6 rounded">
                    Zastosuj
                </button>
            </form>

            <div class="lg:w-9/12 w-full px-2 flex flex-col">
                <div class="flex flex-row">
                    <label class="lg:w-6/12 search">
                        <span class="icon">
                            <Icon name="search" />
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

                <div class="flex flex-col mt-8 w-11/12 mx-auto lg:w-full">
                    <div
                        v-for="n in 10"
                        :key="n"
                        class="border border-gray-200 mb-4 flex flex-col lg:flex-row rounded-sm">
                        <div
                            class="flex-initial w-full h-48 lg:w-48 lg:h-40 bg-cover bg-center border-r border-gray-200"
                            style="background-image: url('/images/product.jpg')" />

                        <div class="flex-grow flex flex-col content-end py-2 px-5">
                            <p class="flex flex-row justify-between">
                                <span class="title text-xl">Kanapka ze smakiem</span>

                                <span class="rating flex flex-row items-center">
                                    <span class="mr-1 font-semibold">4.8</span>
                                    <Icon name="star" />
                                </span>
                            </p>

                            <div class="text-gray-600 text-sm">
                                <p class="supplier">
                                    Pan Kanapek
                                </p>

                                <p class="description mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, nulla.
                                </p>
                            </div>

                            <div class="flex-grow flex flex-row lg:items-end justify-between mt-4 lg:mt-0">
                                <button
                                    type="button"
                                    class="see-ingredients">
                                    <span>Zobacz składniki</span>

                                    <Icon name="info" />
                                </button>

                                <button
                                    type="button"
                                    class="bg-green-600 text-green-100 px-6 py-2 ml-2 rounded text-sm hover:bg-green-700">
                                    Dodaj do koszyka
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="pagination">
                    <a href="#">
                        <Icon name="chevron-left" />
                    </a>
                    <a href="#" class="active">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <a href="#">...</a>
                    <a href="#">8</a>
                    <a href="#">9</a>
                    <a href="#">
                        <Icon name="chevron-right" />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "../components/common/Icon.vue";
import Checkbox from "../components/common/Checkbox.vue";
import Select from "../components/common/Select.vue";

export default {
    components: {
        Icon,
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
        companies: [
            {
                label: "Firma X",
                value: "company_x"
            },
            {
                label: "Firma Y",
                value: "company_y"
            },
            {
                label: "Firma Z",
                value: "company_z"
            }
        ],
        sortBy: [
            {
                value: "rating",
                label: "Najwyższa ocena",
            },
            {
                value: "price",
                label: "Najniższa cena",
            },
            {
                value: "name",
                label: "Alfabetycznie",
            },
        ],
        form: {
            categories: [],
            diets: [],
            companies: [],
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

.rating {
    svg {
        @apply text-orange-500;
        @apply fill-current;
        @apply w-5;
        @apply h-5;

        stroke-width: 1.5;
    }
}

.see-ingredients {
    @apply flex;
    @apply flex-row;
    @apply py-1;
    @apply px-3;
    @apply justify-between;
    @apply items-center;
    @apply rounded;
    @apply bg-gray-200;
    @apply text-gray-700;
    @apply text-sm;

    svg {
        @apply ml-2;
        @apply w-5;
        @apply h-5;

        stroke-width: 1.5;
    }

    &:hover {
        @apply bg-gray-400;
    }
}

.pagination {
    @apply flex;
    @apply flex-row;
    @apply mt-6;
    @apply justify-center;

    a {
        @apply flex;
        @apply items-center;
        @apply py-1;
        @apply px-4;
        @apply mx-1;
        @apply rounded;
        @apply bg-gray-300;
        @apply text-gray-700;

        svg {
            @apply w-4;
            @apply h-4;
        }

        &.active {
            @apply bg-gray-700;
            @apply text-gray-300;
            @apply font-semibold;
        }

        &:hover {
            @apply bg-gray-400;
        }
    }
}
</style>
