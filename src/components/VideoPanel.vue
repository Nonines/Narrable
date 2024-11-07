<template>
    <div class="relative flex items-center bg-none h-80 lg:min-h-96">
        <div class="bg-brand-lime-light py-16 px-8 w-full rounded-2xl md:rounded-l-2xl md:rounded-r-none">
            <div class="flex justify-center items-center bg-gray-300 rounded-2xl w-full">
                <video class="rounded-xl" src="/src/assets/videos/panel-video-1.mp4" autoplay muted loop>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div class="hidden md:block bg-brand-lime-dark py-16 px-8 w-full rounded-r-2xl">
            <div class="flex justify-center items-center bg-gray-300 rounded-2xl w-full">
                <video class="rounded-xl" src="/src/assets/videos/panel-video-2.mp4" autoplay muted loop>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    </div>
</template>
