<script setup>
import { getMediaUrl } from '@/main';

defineProps({
    image: {
        type: String,
        default: '/src/assets/images/card-1.jpg'
    },
    title: {
        type: String,
        default: 'Owners / Executives'
    },
    description: {
        type: String,
        default: 'Supercharge your organization with real-time intelligence.'
    }
});
</script>

<template>
    <div class="max-w-sm bg-brand-white-smoke border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-t-lg" :src="getMediaUrl(image)" alt="card-image" />
        </a>

        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-lg font-light tracking-tight text-brand-black">{{ title }}</h5>
            </a>

            <p class="mb-3 font-normal text-brand-slate-gray">{{ description }}</p>
        </div>
    </div>
</template>
