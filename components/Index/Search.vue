<template>
    <div class="bg-gray-100 border-b">
        <div class="container mx-auto flex flex-col items-center">
            <div class="lg:w-2/3 py-48">
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

                <label class="relative mt-12 flex">
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

                <div class="mt-12 flex flex-wrap">
                    <a href="#" class="tag">Łódź</a>
                    <a href="#" class="tag tag-disabled">Warszawa</a>
                    <a href="#" class="tag tag-disabled">Kraków</a>
                    <a href="#" class="tag tag-disabled">Wrocław</a>
                    <a href="#" class="tag tag-disabled">Gdańsk</a>
                    <a href="#" class="tag tag-disabled">Bydgoszcz</a>
                    <a href="#" class="tag tag-disabled">Poznań</a>
                    <a href="#" class="tag tag-disabled">Katowice</a>
                </div>
            </div>
        </div>
    </div>
</template>

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
    @apply rounded;
    @apply bg-white;
    @apply border;
    @apply shadow;

    &::placeholder {
        @apply text-gray-600;
    }
}

.button {
    @apply absolute;
    @apply px-10;
    @apply rounded-r;
    @apply bg-green-500;
    @apply text-white;
    @apply text-sm;

    top: 0;
    right: 0;
    height: 100%;

    &:hover {
        @apply bg-green-700;
    }
}

.tag {
    @apply py-1;
    @apply px-5;
    @apply mx-2;
    @apply mb-4;
    @apply rounded;
    @apply bg-gray-300;
    @apply text-gray-600;

    &:hover {
        @apply bg-green-500;
        @apply text-white;
    }

    &-disabled {
        @apply bg-gray-200;
        @apply text-gray-400;

        &:hover {
            @apply bg-gray-200;
            @apply text-gray-400;
            @apply cursor-default;
        }
    }
}
</style>
