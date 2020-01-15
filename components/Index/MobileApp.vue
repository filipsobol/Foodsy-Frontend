<template>
    <div class="bg-green-600">
        <div class="container mx-auto pt-20 flex justify-center">
            <div class="mr-16">
                <div class="px-2 text-white">
                    <h3 class="mb-4">
                        <span class="px-3 py-2 bg-green-900 text-4xl">Aplikacja Foodsy</span>
                    </h3>

                    <span class="block bg-green-900 text-lg px-3 py-2">z którą jeszcze szybciej i wygodniej zamówisz jedzenie!</span>
                </div>

                <div class="app-images flex flex-row items-center mt-6">
                    <img
                        src="/images/google-play.png"
                        alt="Ikona Google Play"
                        class="app-google">

                    <img
                        src="/images/app-store.svg"
                        alt="Ikona Google Play"
                        height="50px"
                        class="app-apple">
                </div>
            </div>

            <img
                src="https://via.placeholder.com/300x300"
                alt="Obrazek telefonu"
                class="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app-images {
    img {
        @apply object-contain;
        @apply mr-4;
    }

    .app-google {
        height: 3.7rem;
    }

    .app-apple {
        height: 2.6rem;
    }
}
</style>
