<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { getMediaUrl } from '@/main';
import '@splidejs/vue-splide/css';

const splide = ref();

const splideOptions = ref({
    type: 'loop',
    drag: false,
    focus: 'center',
    perPage: 5,
    autoScroll: {
        speed: 2,
        pauseOnHover: false,
    },
    arrows: false,
    pagination: false,
    gap: '10px',
});

const images = [
    '/src/assets/svg/carousel/calendar.svg',
    '/src/assets/svg/carousel/fdb.svg',
    '/src/assets/svg/carousel/gmail.svg',
    '/src/assets/svg/carousel/inovalon.svg',
    '/src/assets/svg/carousel/outlook.svg',
    '/src/assets/svg/carousel/pverify.svg',
    '/src/assets/svg/carousel/waystar.svg',
];
</script>

<template>
    <!-- carousel -->
    <div
        class="hidden relative md:flex items-center justify-center rounded-2xl bg-none h-80 lg:min-h-[460px] bg-brand-lime-dark gap-1">
        <Splide :options="splideOptions" :extensions="{ AutoScroll }" ref="splide" aria-label="Sponsor Carousel">
            <SplideSlide v-for="(image, index) in images" :key="index">
                <img :src="getMediaUrl(image)" alt="carousel image"
                    class="rounded-xl h-full object-cover object-center" />
            </SplideSlide>
        </Splide>
    </div>

    <!-- integrations -->
    <div class="md:hidden flex justify-center items-center rounded-2xl py-16 px-4 bg-brand-lime-dark">
        <img src="/src/assets/images/integrations.jpg" alt="integrations"
            class="w-full h-full object-cover object-center" />
    </div>
</template>
