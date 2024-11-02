<script setup>
import ProductIcon from '@/components/ProductIcon.vue';

defineProps({
    icon: {
        type: String,
        default: '/src/assets/svg/growth-bars.svg'
    },
    title: {
        type: String,
        default: 'Accelerate revenue growth'
    },
    description: {
        type: String,
        default: 'Turn your data into revenue-boosting referrals. Grow your patient census in your sleep.'
    },
    video: {
        type: String,
        default: '/src/assets/videos/financial-reports.mp4'
    }
});
</script>

<template>
    <div
        class="grid grid-cols-1 md:grid-cols-[0.75fr_1fr] lg:grid-cols-2 lg:grid-rows-[auto] gap-y-8 sm:gap-y-12 md:gap-y-16 gap-x-12 lg:gap-x-24 grid-flow-row md:auto-cols-fr min-h-[auto] items-center">
        <!-- content -->
        <div class="flex flex-col gap-8">
            <ProductIcon :svg="icon"/>

            <h1 class="max-w-2xl text-4xl font-light tracking-tight leading-none md:text-5xl text-brand-black">
                {{ title }}
            </h1>

            <p class="max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                {{ description }}
            </p>

            <slot/>
        </div>

        <!-- video -->
        <div class="flex items-center h-full">
            <div class="flex justify-center items-center bg-gray-300 rounded-2xl w-full">
                <video :src="video" autoplay muted loop>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>
