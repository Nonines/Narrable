<script setup>
defineProps({
    customClasses: {
        type: String,
    },
    defaultClasses: {
        type: String,
        default: 'flex justify-center items-center w-14 h-14 bg-brand-lime-light rounded-lg'
    },
    svg: {
        type: String,
        default: '/src/assets/svg/growth-bars.svg'
    },
    altText: {
        type: String,
        default: 'icon'
    }
});
</script>

<template>
    <!-- icon -->
    <div :class="[defaultClasses, customClasses]">
        <img :src="svg" :alt="altText">
    </div>
</template>
