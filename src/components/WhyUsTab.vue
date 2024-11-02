<script setup>
import { computed } from 'vue';

const props = defineProps({
    heading: {
        type: String,
        default: 'API First'
    },
    description: {
        type: String,
        default: 'Patient records travel seamlessly between providers and payers.'
    },
    isActiveTab: {
        type: Boolean,
        default: false
    }
})

const isActive = computed(() => (props.isActiveTab));

const transitionStyles = computed(() => (isActive.value ? 'transition-all duration-[8s] ease-linear' : 'transition-none'));

const innerLineWidth = computed(() => (isActive.value ? '100%' : '0%'));
</script>

<template>
    <!-- tab -->
    <div class="flex flex-col p-[1.5rem_2rem] gap-4 text-left w-full">
        <h4 class="text-2xl md:text-3xl text-brand-white-smoke">{{ heading }}</h4>

        <!-- outer line -->
        <div class="h-[1px] w-full bg-brand-slate-gray my-6 overflow-hidden">
            <!-- inner line -->
            <div :class="['h-[1px] bg-brand-white-smoke', transitionStyles]" :style="{ width: innerLineWidth }">
            </div>
        </div>

        <p :class="isActive ? 'text-brand-white-smoke' : 'text-brand-slate-gray'">{{ description }}</p>
    </div>
</template>
