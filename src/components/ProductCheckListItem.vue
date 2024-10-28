<script setup>
defineProps({
    title: {
        type: String,
        default: 'Lorem ipsum'
    },
    description: {
        type: String,
        default: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam.'
    }
})
</script>

<template>
    <!-- checklist item -->
    <div class="flex gap-2 justify-between">
        <div class="w-9">
            <img src="/src/assets/svg/check-round.svg" alt="checkmark">
        </div>

        <div class="flex flex-col w-full">
            <h5 class="mb-1 text-brand-white-smoke font-extrabold">{{ title }}</h5>
            <p class="text-slate-400">{{ description }}</p>
        </div>
    </div>
</template>
