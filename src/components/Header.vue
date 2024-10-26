<template>
    <!-- Nav Section -->
    <nav class="bg-brand-white-smoke text-brand-black shadow-md fixed top-0 left-0 right-0 z-20 h-20">
        <div class="flex justify-between items-center px-brand-xl py-4 w-full h-full">
            <h1 class="text-lg font-semibold">narrable</h1>
            <!-- Hamburger Menu Icon -->
            <button @click="toggleMenu" class="text-black focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>
        </div>

        <!-- Slide-up Navigation Menu -->
        <transition name="slide-up">
            <nav v-if="isMenuOpen" class="bg-white text-black">
                <ul class="flex flex-col text-left space-y-4 px-brand-xl py-4">
                    <li>
                        <a href="#about" class="block py-2">About</a>
                    </li>
                    <li>
                        <a href="#solutions" class="block py-2">Solutions</a>
                    </li>
                    <li>
                        <a href="#resources" class="block py-2">Resources</a>
                    </li>
                    <li>
                        <a href="#contact" class="block py-2">Contact</a>
                    </li>
                </ul>
            </nav>
        </transition>
    </nav>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const isMenuOpen = ref(false);

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        return {
            isMenuOpen,
            toggleMenu,
        };
    },
};
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: transform 0.3s ease-out;
}

.slide-up-enter-from {
    transform: translateY(-100%);
}

.slide-up-leave-to {
    transform: translateY(-100%);
}
</style>
