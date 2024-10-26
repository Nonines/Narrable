<script setup>
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
    }
});
</script>

<template>
    <div class="grid grid-cols-2 gap-x-24 grid-flow-row min-h-[auto]">
        <!-- content -->
        <div class="flex flex-col gap-8">
            <div class="flex justify-center items-center w-14 h-14 bg-brand-black rounded-lg">
                <img :src="icon" alt="icon">
            </div>

            <h1 class="max-w-2xl text-3xl font-light tracking-tight leading-none md:text-4xl text-brand-black">
                {{ title }}
            </h1>

            <p class="max-w-2xl font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                {{ description }}
            </p>
        </div>

        <!-- image -->
        <div class="flex items-center">
            <div class="flex justify-center items-center bg-gray-300 rounded-2xl w-full h-4/5">
                <video src=""></video>
            </div>
        </div>
    </div>
</template>
