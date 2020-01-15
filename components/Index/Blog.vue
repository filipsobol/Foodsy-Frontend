<template>
    <div class="bg-white">
        <div class="container mx-auto py-16 text-center text-gray-800">
            <p class="mb-12 text-2xl font-semibold tracking-wide">
                Na naszym blogu
            </p>

            <div class="flex lg:flex-row flex-col items-center -mx-3">
                <div
                    v-for="elem in 4"
                    :key="elem"
                    class="lg:rounded shadow lg:w-1/4 w-10/12 lg:my-0 my-5 mx-3">

                    <img
                        class="w-full h-48 object-cover"
                        src="https://via.placeholder.com/300x200"
                        alt="Post cover image">

                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">
                            The Coldest Sunset
                        </div>

                        <p class="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>

                    <div class="px-6 py-4 flex">
                        <a
                            href="#"
                            class="flex-initial flex justify-start items-center my-4 text-sm font-semibold text-gray-700">
                            <span>Czytaj dalej</span>
                            <svg class="ml-2 h-5 w-5">
                                <use xlink:href="/icons/sprite.svg#arrow-right" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
