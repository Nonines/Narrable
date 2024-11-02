<script setup>
import VideoPanel from '@/components/VideoPanel.vue';
import ImagePanel from '@/components/ImagePanel.vue';

defineProps({
    activeTabId: {
        type: Number,
    }
})
</script>

<template>
    <VideoPanel v-if="activeTabId === 1" />
    <ImagePanel v-if="activeTabId === 2"/>
</template>
