<script setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import Card from '@/components/TestimonialCard.vue';
import { ref } from 'vue';

const splide = ref();

const splideOptions = ref({
    rewind: false,
    type: 'loop',
    // autoWidth: true,
    // focus: 'center',
    // padding: '5rem',
    perPage: 1,
    arrows: false,
    pagination: false,
});
</script>

<template>
    <div class="flex flex-col gap-16 justify-center">
        <Splide :options="splideOptions" ref="splide" aria-label="My Favorite Images">
            <SplideSlide class="flex justify-center">
                <Card
                    content="Accessing patient information and entering data has never been easier. I wholeheartedly recommend Narrable to any healthcare provider seeking a reliable and efficient EMR system."
                    client="Curtis Choi, DPT" role="Director of Rehabilitation and Physical Therapist" />
            </SplideSlide>
            <SplideSlide class="flex justify-center">
                <Card
                    content="A product that I can already see is trending towards changing the marketplace and allowing agencies to achieve not only 5 star status, but true 5 star outcomes."
                    client="Marc Vasil, PT" role="President and Administrator" />
            </SplideSlide>
        </Splide>

        <div class="flex justify-center items-center gap-5">
            <button @click="splide.go('-1')" class="bg-white p-5 md:p-6 rounded-lg">
                <img class="rotate-180" src="/src/assets/svg/arrow-right.svg" alt="left">
            </button>
            <button @click="splide.go('+1')" class="bg-white p-5 md:p-6 rounded-lg">
                <img src="/src/assets/svg/arrow-right.svg" alt="right">
            </button>
        </div>
    </div>
</template>
