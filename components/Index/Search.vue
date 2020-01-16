<template>
    <div class="relative bg-black border-b overflow-hidden">
        <img
            src="https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg"
            alt="Banner"
            class="banner">

        <div class="relative flex flex-col">
            <div class="content mx-auto w-5/12">
                <div class="mx-auto text-center text-gray-100 font-light tracking-wide">
                    <p class="text-5xl mb-2">
                        Zamów <span class="underline font-semibold">śniadanie</span> lub <span class="underline font-semibold">obiad</span> do pracy
                    </p>

                    <p class="text-2xl">
                        z darmową dostawą do Twojego biurka
                    </p>
                </div>

                <label class="relative mt-12 mx-32 flex">
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

                <div class="mt-12 mx-64 flex justify-center flex-wrap">
                    <a href="#" class="tag">Łódź</a>
                    <a href="#" class="tag">Warszawa</a>
                    <a href="#" class="tag">Kraków</a>
                    <a href="#" class="tag">Wrocław</a>
                    <a href="#" class="tag">Gdańsk</a>
                    <a href="#" class="tag">Gdynia</a>
                    <a href="#" class="tag">Poznań</a>
                    <a href="#" class="tag">Bydgoszcz</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.banner {
    @apply absolute;
    @apply z-0;
    @apply bg-cover;

    top: -200px;
    right: -200px;
    opacity: 0.55;
}

.content {
    padding: 16rem 0 24rem;
}

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
    @apply bg-gray-300;
    @apply border;
    @apply shadow-2xl;

    &::placeholder {
        @apply text-gray-600;
    }
}

.button {
    @apply absolute;
    @apply px-10;
    @apply rounded-r;
    @apply bg-green-600;
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
    @apply bg-green-600;
    @apply text-green-100;
    @apply shadow-2xl;

    &:hover {
        @apply bg-green-700;
        @apply text-white;
    }
}
</style>
