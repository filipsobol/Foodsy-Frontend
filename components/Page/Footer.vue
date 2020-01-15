<template>
    <div>
        <div class="bg-gray-800 text-white">
            <div class="container mx-auto py-16 flex justify-between">
                <p>Foodsy logo</p>

                <div class="flex flex-col mr-12">
                    <a href="#">Regulamin</a>
                    <a href="#">Polityka prywatnosci</a>
                    <a href="#">Kontakt</a>
                </div>

                <div class="flex flex-col">
                    <a href="#">Blog</a>
                    <a href="#">Dla firm</a>
                    <a href="#">O nas</a>
                </div>

                <div class="flex flex-col">
                    <a href="#">Lorem</a>
                    <a href="#">Ipsum</a>
                </div>

                <div class="flex">
                    <svg class="ml-6 text-white">
                        <use xlink:href="/icons/sprite.svg#facebook" />
                    </svg>

                    <svg class="ml-6 text-white">
                        <use xlink:href="/icons/sprite.svg#twitter" />
                    </svg>

                    <svg class="ml-6 text-white">
                        <use xlink:href="/icons/sprite.svg#youtube" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
svg {
    stroke-width: 1.5;
}
</style>
