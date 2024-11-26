<template>
    <!-- Nav Section -->
    <nav :class="navbarClasses"
        class="bg-brand-white-smoke text-brand-black fixed top-0 left-0 right-0 z-20 h-20 transition-colors duration-300">
        <div class="flex justify-between items-center px-brand-xl py-4 w-full h-full">
            <div class="flex items-center gap-7">
                <!-- logo -->
                <a href="#">
                    <img src="/src/assets/svg/brand-logo.svg" alt="logo">
                </a>
                <!-- links -->
                <ul class="hidden lg:flex gap-3 justify-between items-center text-lg">
                    <li>
                        <a href="#" class="block p-6">About</a>
                    </li>
                    <li>
                        <a href="#" class="block p-6">Solutions</a>
                    </li>
                    <li>
                        <a href="#" class="block p-6">Resources</a>
                    </li>
                    <li>
                        <a href="#" class="block p-6">Contact</a>
                    </li>
                </ul>
            </div>

            <!-- Hamburger Menu Icon -->
            <button @click="toggleMenu" class="lg:hidden text-black focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                    </path>
                </svg>
            </button>

            <!-- Demo button -->
            <BrandButton custom-classes="hidden lg:flex py-4 px-8 w-max">
                Book a demo
            </BrandButton>
        </div>

        <!-- Slide-up Navigation Menu -->
        <transition name="slide-up">
            <nav v-if="isMenuOpen" class="bg-white text-black">
                <ul class="flex flex-col text-left space-y-4 px-brand-xl py-4">
                    <li>
                        <a href="#" class="block py-2">About</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2">Solutions</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2">Resources</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2">Contact</a>
                    </li>
                </ul>
            </nav>
        </transition>
    </nav>
</template>

<script>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import BrandButton from '@/components/BrandButton.vue';

export default {
    components: {
        BrandButton,
    },

    setup() {
        const isMenuOpen = ref(false);
        const hasScrolled = ref(false);

        const toggleMenu = () => {
            isMenuOpen.value = !isMenuOpen.value;
        };

        const handleScroll = () => {
            hasScrolled.value = window.scrollY > 0;
        };

        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onUnmounted(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        const navbarClasses = computed(() => {
            return hasScrolled.value ? 'bg-white text-gray-800 shadow-lg' : '';
        });

        return {
            isMenuOpen,
            toggleMenu,
            navbarClasses,
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
