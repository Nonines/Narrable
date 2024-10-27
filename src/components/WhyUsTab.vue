<script setup>
defineProps({
    heading : {
        type: String,
        default: 'API First'
    },
    description : {
        type: String,
        default: 'Patient records travel seamlessly between providers and payers.'
    }
})
</script>

<template>
    <div class="flex flex-col p-[1.5rem_2rem] gap-4 text-left w-full">
        <h4 class="text-2xl md:text-3xl text-brand-white-smoke">{{ heading }}</h4>
        <hr class="border-t border-brand-slate-gray my-6" />
        <p class="text-brand-slate-gray">{{ description}}</p>
    </div>
</template>
