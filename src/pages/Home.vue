<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
</script>

<template>
    <AppLayout>
        <!-- Page Content -->
        <div class="pt-20">
            <!-- Hero section -->
            <section class="bg-brand-white-smoke">
                <div class="grid max-w-screen-xl px-brand-xl py-8 mx-auto lg:gap-8 xl:gap-8 lg:py-16 lg:grid-cols-12">
                    <div class="mr-auto place-self-center lg:col-span-6">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-black">
                            Home health, reimagined.</h1>
                        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                            The modern, AI-powered platform for home health. Automating up to 60% of your administrative
                            tasks every day.</p>
                        <a href="#"
                            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-brand-black hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                            Book a demo
                            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="#"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-brand-black border border-brand-white-smoke rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white">
                            Learn more
                        </a>
                    </div>
                    <div class="mt-16 lg:mt-0 lg:col-span-6 flex items-center justify-center">
                        <img class="rounded-lg w-full" src="/src/assets/images/brand-hero.jpg" alt="hero">
                    </div>
                </div>

                <div class="flex justify-center py-4">
                    <div class="px-4 flex flex-col items-center text-center lg:px-36">
                        <span class="text-brand-black">Trusted by</span>
                        <div class="flex flex-wrap gap-12 w-full justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img class="max-h-12" src="/src/assets/images/amcare-pro.png" alt="amcare">
                            </a>
                            <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img class="max-h-12" src="/src/assets/images/dhm-agency.webp" alt="dhm">
                            </a>
                            <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <img class="max-h-12" src="/src/assets/images/plat-services.png" alt="platinum">
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Solutions section -->
        </div>
    </AppLayout>
</template>
