<template>
    <div class="bg-white border-b">
        <div class="container mx-auto py-16 text-center text-gray-800">
            <p class="mb-6 text-2xl font-semibold tracking-wide">
                Jak to działa?
            </p>

            <div class="w-full flex flex-row content-center">
                <div class="step">
                    <img
                        src="/icons/directions.svg"
                        width="140"
                        height="100">

                    <span class="title">Wybierz miasto</span>

                    <span class="description">Wpisz lub wybierz miasto z listy.<br>Pozwoli nam to wyświetlić dostępne produkty.</span>
                </div>

                <div class="step">
                    <img
                        src="/icons/add_to_cart.svg"
                        width="130"
                        height="100">

                    <span class="title">Dodaj zamówienie do koszyka</span>

                    <span class="description">Dodaj ulubione produkty do koszyka.<br>Możesz wybrać kiedy mają być dostarczone.</span>
                </div>

                <div class="step">
                    <img
                        src="/icons/pizza_sharing.svg"
                        width="180"
                        height="100">

                    <span class="title">Zapłać i poczekaj na dostawcę</span>

                    <span class="description">Możesz zapłacić online lub gotówką przy odbiorze.<br>Życzymy smacznego!</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
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

    .title {
        @apply mt-5;
        @apply text-lg;
        @apply font-semibold;
    }

    .description {
        @apply mt-3;
        @apply text-gray-500;
        @apply text-sm;
    }
}

</style>
