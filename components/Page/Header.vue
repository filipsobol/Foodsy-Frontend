<template>
    <div class="bg-white shadow">
        <nav class="container mx-auto flex lg:flex-row flex-col justify-between p-4">
            <div class="flex lg:mr-6 text-gray-800">
                <!-- Logo -->
                <span class="font-semibold text-xl tracking-tight flex-grow">Foodsy</span>

                <!-- Mobile hamburger -->
                <button
                    @click="toggleMenu()"
                    class="px-3 py-2 rounded border border-green-500 text-green-500 lg:hidden">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <!-- Menu -->
            <div
                :class="{ hidden: !menuOpen }"
                class="flex flex-col flex-grow justify-center text-sm font-semibold text-gray-600 lg:flex lg:flex-row lg:items-center">
                <a
                    href="#responsive-header"
                    class="lg:mt-1 mt-4 lg:mr-8 border-b-2 border-transparent hover:border-green-500">
                    Strona główna
                </a>

                <a
                    href="#responsive-header"
                    class="lg:mt-1 mt-4 lg:mr-8 border-b-2 border-transparent hover:border-green-500">
                    Blog
                </a>

                <a
                    href="#responsive-header"
                    class="lg:mt-1 mt-4 lg:mr-8 border-b-2 border-transparent hover:border-green-500">
                    Dla firm
                </a>
            </div>

            <button class="btn-cart">
                <svg>
                    <use xlink:href="/icons/sprite.svg#shopping-bag" />
                </svg>
            </button>

            <button class="btn-user">
                <svg>
                    <use xlink:href="/icons/sprite.svg#user" />
                </svg>
            </button>
        </nav>
    </div>
</template>

<script>
export default {
    data: () => ({
        menuOpen: false,
    }),

    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
    },
};
</script>

<style lang="scss">
.btn-cart {
    @apply text-gray-600;
    @apply mr-8;

    &:hover {
        svg {
            @apply text-green-500;
        }
    }
}

.btn-user {
    @apply text-gray-600;

    &:hover {
        @apply text-green-500;
    }
}
</style>
