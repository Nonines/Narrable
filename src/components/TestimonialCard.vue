<script setup>
defineProps({
    content: {
        type: String,
        default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, ipsam.'
    },
    client: {
        type: String,
        default: 'Bruce Wayne, TESLA'
    },
    role: {
        type: String,
        default: 'Director of Engineering and Operations'
    }
});
</script>

<template>
    <figure
        class="flex flex-col items-center justify-center p-8 text-[#72788b] text-center bg-[#fffefe] border-2 border-[#e4e9e8] rounded-xl max-w-3xl mx-2">
        <blockquote class="mb-4 lg:mb-8">
            <p class="my-4 text-lg">"{{ content }}"</p>
        </blockquote>

        <figcaption class="flex items-center justify-center">
            <div class="space-y-0.5 font-medium ms-3 text-center">
                <div class="text-black font-bold">{{ client }}</div>
                <div class="text-sm text-[#72788b]">
                    {{ role }}
                </div>
            </div>
        </figcaption>
    </figure>
</template>
