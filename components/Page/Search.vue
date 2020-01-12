<template>
    <div>
        <div class="container mx-auto pt-48 pb-64 flex flex-col border-b">
            <div class="mx-auto text-center text-gray-800 font-light tracking-wide">
                <p class="text-5xl">
                    Zamów jedzenie do pracy...
                </p>

                <p class="text-2xl">
                    a dostawca
                    <span class="underline">za darmo</span>
                    dostarczy je do Twojego biurka
                </p>
            </div>

            <label class="relative mx-64 mt-12 flex">
                <span class="icon">
                    <svg>
                        <use xlink:href="/icons/sprite.svg#search" />
                    </svg>
                </span>

                <input
                    class="input"
                    type="text"
                    placeholder="Wpisz miasto"
                    autofocus>

                <button class="button">
                    Szukaj
                </button>
            </label>
        </div>

        <div class="bg-white border-b">
            <div class="container mx-auto pt-12 pb-20 text-center text-gray-800">
                <p class="mb-8 text-2xl font-semibold tracking-wide">
                    Jak to działa?
                </p>

                <div class="w-full flex flex-row content-center">
                    <div class="step step-active">
                        <svg>
                            <use xlink:href="/icons/sprite.svg#map-pin" />
                        </svg>
                        <span>Podaj adres dostawy</span>
                    </div>

                    <div class="step">
                        <svg>
                            <use xlink:href="/icons/sprite.svg#shopping-cart" />
                        </svg>
                        <span>Dodaj dania do koszyka</span>
                    </div>

                    <div class="step">
                        <svg>
                            <use xlink:href="/icons/sprite.svg#coffee" />
                        </svg>
                        <span>Zapłać i poczekaj na dostawcę</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        test: "Test"
    })
};
</script>

<style lang="scss" scoped>
.icon {
    @apply absolute;
    @apply left-0;
    @apply pl-4;
    @apply pr-2;
    @apply text-gray-600;

    margin: 13px 0;
}

.input {
    @apply w-full;
    @apply py-3;
    @apply pl-16;
    @apply pr-32;
    @apply rounded-full;
    @apply bg-white;
    @apply border;

    &:focus {
        @apply shadow-outline;
    }

    &::placeholder {
        @apply text-gray-600;
    }
}

.button {
    @apply absolute;
    @apply py-3;
    @apply px-10;
    @apply rounded-full;
    @apply bg-green-500;
    @apply text-white;
    @apply text-sm;

    top: 2.5px;
    right: 3px;

    &:hover {
        @apply bg-green-700;
    }
}

.step {
    @apply w-full;
    @apply flex;
    @apply flex-col;
    @apply items-center;
    @apply mt-5;

    svg {
        @apply text-gray-600;
        height: 48px;
        width: 48px;
        stroke-width: 1;
    }

    span {
        @apply mt-5;
        @apply text-lg;
    }
}

.step-active {
    svg {
        @apply text-green-500;
    }

    span {
        @apply text-green-500;
        @apply font-semibold;
    }
}
</style>
