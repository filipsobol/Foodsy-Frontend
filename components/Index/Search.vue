<template>
    <div class="wrapper">
        <img
            src="/images/banner.jpg"
            alt="Banner"
            class="banner-image">

        <div class="content">
            <div class="mx-auto lg:w-5/12 w-11/12">
                <div class="mx-auto text-center text-gray-200 font-light tracking-wide">
                    <p class="lg:text-5xl text-2xl mb-2">
                        Zamów <span class="underline font-semibold">śniadanie</span> lub <span class="underline font-semibold">obiad</span> do pracy
                    </p>

                    <p class="lg:text-xl text-lg">
                        z darmową dostawą do Twojego biurka
                    </p>
                </div>

                <label class="relative mt-16 lg:mx-32 flex">
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
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    @apply relative;
    @apply border-b;
    @apply overflow-hidden;

    background: #060606;
}

.banner-image {
    @apply absolute;
    @apply z-0;
    @apply bg-cover;

    width: 1600px;
    right: 0;
    bottom: 0;
    opacity: 0.7;
}

.content {
    @apply relative;
    @apply flex;
    @apply flex-col;

    background: linear-gradient(rgba(255, 255, 255, .08), rgba(255, 255, 255, .03))
}

.content > div {
    padding: 10rem 0 16rem;
}

@media (min-width: 1024px) {
    .content > div {
        padding: 20rem 0 32rem;
    }
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
        @apply text-gray-800;
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
</style>
