<script setup>
import VideoPanel from '@/components/VideoPanel.vue';
import ImagePanel from '@/components/ImagePanel.vue';
import CarouselPanel from '@/components/CarouselPanel.vue'
defineProps({
    activeTabId: {
        type: Number,
    }
})
</script>

<template>
    <CarouselPanel v-if="activeTabId === 0" />
    <VideoPanel v-if="activeTabId === 1" />
    <ImagePanel v-if="activeTabId === 2" />
</template>
