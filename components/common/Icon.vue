<template>
    <svg>
        <use :xlink:href="'/icons/sprite.svg#' + name" />
    </svg>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
            type: String,
        },
    },
};
</script>
