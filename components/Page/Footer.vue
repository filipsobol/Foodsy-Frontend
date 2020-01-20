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

                <div class="social">
                    <Icon name="facebook" />

                    <Icon name="twitter" />

                    <Icon name="youtube" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icon from "../common/Icon.vue";

export default {
    components: {
        Icon
    }
};
</script>

<style lang="scss" scoped>
.social {
    @apply flex;

    svg {
        @apply ml-4;

        stroke-width: 1.5;
    }
}
</style>
