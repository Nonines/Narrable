<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import ImageCard from '@/components/CardWithImage.vue'
import BenefitsCard from '@/components/BenefitsCard.vue';
import Button from '@/components/BrandButton.vue';
import WhyUsTab from '@/components/WhyUsTab.vue';
import Panels from '@/components/Panels.vue';
import ProductIcon from '@/components/ProductIcon.vue';
import ProductCheckItem from '@/components/ProductCheckListItem.vue';
import Carousel from '@/components/Carousel.vue';

import { onMounted, onBeforeUnmount, ref } from 'vue';

const activeTab = ref(-1);
const animationInterval = ref(null);

const startAnimationCycle = () => {
    activeTab.value++;
    animationInterval.value = setInterval(() => {
        activeTab.value = (activeTab.value + 1) % 3;
    }, 8000);
}

const stopAnimationCycle = () => {
    if (animationInterval.value) {
        clearInterval(animationInterval.value);
        animationInterval.value = null;
    }
}

onMounted(() => {
    startAnimationCycle();
});

onBeforeUnmount(() => {
    stopAnimationCycle();
})
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
                        <Button />
                        <a href="#"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-brand-black border border-brand-white-smoke rounded-lg focus:ring-4 focus:ring-gray-100 bg-white">
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
                        <div
                            class="flex flex-wrap gap-12 w-full justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            <a href="#" class="mr-5 mb-5 lg:mb-0">
                                <img class="max-h-12" src="/src/assets/images/amcare-pro.png" alt="amcare">
                            </a>
                            <a href="#" class="mr-5 mb-5 lg:mb-0">
                                <img class="max-h-12" src="/src/assets/images/dhm-agency.webp" alt="dhm">
                            </a>
                            <a href="#" class="mr-5 mb-5 lg:mb-0">
                                <img class="max-h-12" src="/src/assets/images/plat-services.png" alt="platinum">
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Solutions section -->
            <section class="">
                <div class="flex flex-col gap-10 items-center justify-center p-brand-xl">
                    <div>
                        <img src="/src/assets/svg/icon.svg" alt="icon">
                    </div>

                    <div class="text-center">
                        <h1
                            class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-black">
                            A platform designed for home health</h1>

                        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                            Finally, a platform designed in partnership with every team in home health.</p>
                    </div>

                    <div
                        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-[auto] auto-cols-fr gap-x-8 gap-y-16">
                        <ImageCard />

                        <ImageCard image="/src/assets/images/card-2.jpg" title="Directors of Nursing"
                            description="Enable clinicians to focus on patient care, unburdened." />

                        <ImageCard image="/src/assets/images/card-3.jpg" title="Director of Operations"
                            description="Put an end to double data entry in home health." />

                        <ImageCard image="/src/assets/images/card-4.jpg" title="Director of Finance"
                            description="Bill and collect with ease in an ever-changing payer landscape." />
                    </div>

                    <div>
                        <Button custom-classes="">
                            Book a demo
                        </Button>
                        <a href="#"
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-brand-black border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 bg-white">
                            Contact us
                        </a>
                    </div>
                </div>
            </section>

            <!-- Benefits section -->
            <section class="py-10 bg-brand-white-smoke">
                <div class="p-brand-xl">
                    <div class="flex flex-col gap-4 justify-center items-center text-center">
                        <img src="/src/assets/svg/icon.svg" alt="icon">
                        <h1
                            class="max-w-2xl mb-4 text-3xl tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-black">
                            Unlock value on day one</h1>
                        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                            There is no better time than now to unlock ROI in home health.</p>
                    </div>

                    <div class="flex flex-col gap-12 md:gap-14 lg:gap-16">
                        <BenefitsCard />
                        <BenefitsCard icon="/src/assets/svg/dollar-sign.svg" title="Boost margins with automation"
                            description="Free up your team with API-driven automation solutions. Save up to 60% in inefficiencies per year."
                            video="/src/assets/videos/verify-unsuccesful.mp4" />
                        <BenefitsCard icon="/src/assets/svg/smiley.svg" title="Equip clinicians with AI"
                            description="Enable quality documentation upfront with AI. Reduce clinician turnover by up to 30%."
                            video="/src/assets/videos/AI Vitals.mp4">
                            <Button custom-classes="w-3/4 md:w-1/2">
                                Book a demo
                            </Button>
                        </BenefitsCard>
                    </div>
                </div>
            </section>

            <!-- Why-Us Section -->
            <section class="py-10 bg-brand-black">
                <div class="p-brand-xl">
                    <!-- background logo -->
                    <div class="max-w-7xl relative !mx-auto">
                        <img class="absolute will-change-transform" src="/src/assets/svg/background-logo.svg" alt=""
                            style="transform: translate3d(0px, -10.4982px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-1.79992deg) skew(0deg, 0deg); transform-style: preserve-3d;">
                    </div>

                    <!-- info -->
                    <div class="flex flex-col gap-4 justify-center items-center text-center">
                        <img src="/src/assets/svg/icon.svg" alt="icon">
                        <h1
                            class="max-w-2xl mb-4 text-3xl tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-white-smoke">
                            The Narrable difference</h1>
                        <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-brand-slate-gray">
                            We are a team of healthcare professionals. Our mission is to empower clinicians to deliver
                        </p>
                    </div>

                    <!-- tabs -->
                    <div class="flex flex-col items-center md:flex-row md:justify-center relative">
                        <WhyUsTab :isActiveTab="activeTab === 0" />
                        <WhyUsTab :isActiveTab="activeTab === 1" heading="AI Powered"
                            description="Lastest advances in AI augment your day-to-day interactions." />
                        <WhyUsTab :isActiveTab="activeTab === 2" heading="Modern Design"
                            description="Built with the user in mind for the 21st century." />
                    </div>

                    <!-- panels-wrapper -->
                    <div class="overflow-hidden mt-8">
                        <Panels :active-tab-id="activeTab" />
                    </div>
                </div>
            </section>

            <!-- Home-Product section -->
            <section class="py-10 bg-brand-black">
                <div class="p-brand-xl flex flex-col md:flex-row gap-4 justify-center items-start">
                    <!-- left -->
                    <div class="flex flex-col gap-4 w-full items-start text-center md:sticky md:top-28">
                        <img src="/src/assets/svg/icon.svg" alt="icon">

                        <h1
                            class="max-w-2xl mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-white-smoke text-left">
                            The modern system of record for home health.
                        </h1>

                        <div class="flex flex-col gap-3 md:flex-row text-brand-white-smoke font-bold">
                            <Button custom-classes="px-10 py-5 bg-brand-lime-bright text-nowrap">
                                Book a demo
                            </Button>
                            <a href="#"
                                class="inline-flex items-center justify-center px-1 py-4 text-base font-medium text-center bg-brand-lime-light rounded-lg focus:ring-4 focus:ring-gray-100 w-3/4 text-nowrap md:w-full md:px-4">
                                Contact us
                            </a>
                        </div>
                    </div>

                    <!-- right -->
                    <div class="flex flex-col gap-10 w-full">
                        <!-- item -->
                        <div class="flex flex-col gap-4 p-8 md:p-10 rounded-xl bg-brand-lime-dark">
                            <ProductIcon custom-classes="bg-brand-lime-light" svg="/src/assets/svg/clipboard.svg"
                                alt-text="clipboard-icon" />

                            <h1 class="text-brand-white-smoke text-3xl md:text-4xl lg:text-5xl">
                                Electronic Health Record
                            </h1>

                            <p class="text-brand-slate-gray text-xl">Designed for any device across any platform.</p>

                            <!-- checklist -->
                            <div class="flex flex-col gap-3 justify-between items-center">
                                <ProductCheckItem title="Referrals Management"
                                    description="Referrals pipeline that monitors and accelerates patient admission." />

                                <ProductCheckItem title="Patient Profile"
                                    description="Patient demographics, medical history, and documents management." />

                                <ProductCheckItem title="Staff & Schedule"
                                    description="Care team assignment and scheduling based on capacity and geography." />

                                <ProductCheckItem title="Clinical Documentation"
                                    description="Mobile-first assessments, visit notes, plans of care, OASIS-E, and real-time quality checks powered by AI." />
                            </div>
                        </div>

                        <!-- item -->
                        <div class="flex flex-col gap-4 p-8 md:p-10 rounded-xl bg-[#2c4548]">
                            <ProductIcon custom-classes="bg-[#43585a]" svg="/src/assets/svg/dollar-sign.svg"
                                alt-text="dollar-icon" />

                            <h1 class="text-brand-white-smoke text-3xl md:text-4xl">
                                Revenue Cycle Management
                            </h1>

                            <p class="text-slate-400 text-xl">For multi-payer home health agencies. Covers
                                Medicare, Medicare Advantage, Medicaid, Managed Medicaid, and Commercial plans.</p>

                            <!-- checklist -->
                            <div class="flex flex-col gap-3 justify-between items-center">
                                <ProductCheckItem title="Eligibility Verification"
                                    description="Detailed eligibility report including patient copays and prior home health admissions." />

                                <ProductCheckItem title="Prior Authorization"
                                    description="Multi-payer prior authorization rules, authorization requests, and schedule warnings." />

                                <ProductCheckItem title="Claims"
                                    description="Multi-payer claims, claim status history, and claim corrections workflow with automated revenue codes." />

                                <ProductCheckItem title="Remits"
                                    description="Remittance advice, payment history, and translation of adjustment codes." />

                                <ProductCheckItem title="Accounts Receivable"
                                    description="Accurate revenue forecasts and accounts receivables based on PDGM, LUPA, and contracted rates." />
                            </div>
                        </div>

                        <!-- item -->
                        <div class="flex flex-col gap-4 p-8 md:p-10 rounded-xl bg-[#3e5759]">
                            <ProductIcon custom-classes="bg-[#53666b]" svg="/src/assets/svg/analytics.svg"
                                alt-text="clipboard-icon" />

                            <h1 class="text-brand-white-smoke text-3xl md:text-4xl lg:text-5xl">
                                Embedded Analytics
                            </h1>

                            <p class="text-slate-400 text-xl">Provide decision-making tools for home health
                                leaders at all levels.</p>

                            <!-- checklist -->
                            <div class="flex flex-col gap-3 justify-between items-center">
                                <ProductCheckItem title="Growth Dashboard"
                                    description="Referrals and patient census dashboard with HHRG and case mix targets." />

                                <ProductCheckItem title="Financial Dashboard"
                                    description="Month over month expected revenue vs amount paid, by payer." />

                                <ProductCheckItem title="Compliance Dashboard"
                                    description="Clinical note and order compliance dashboard with automated alerts for overdue documentation." />

                                <ProductCheckItem title="Build Your Own"
                                    description="Ability to build your own dashboard across any data in the system." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Testimonials section -->
            <section class="py-10 bg-brand-white-smoke">
                <div class="p-brand-xl">
                    <!-- info -->
                    <div class="flex flex-col gap-4 justify-center items-center text-center mb-9">
                        <img src="/src/assets/svg/icon.svg" alt="icon">
                        <h1
                            class="max-w-2xl mb-4 text-3xl tracking-tight leading-none md:text-5xl xl:text-6xl text-brand-black md:w-1/2">
                            What home health leaders are saying</h1>
                    </div>

                    <!-- carousel -->
                    <div>
                        <Carousel />
                    </div>
                </div>
            </section>

            <!-- Call-To-Action section -->
            <section class="relative bg-brand-white-smoke">
                <div class="absolute top-auto bottom-0 w-full h-1/2 bg-brand-black"></div>

                <div class="relative px-6 md:px-brand-xl lg:px-24 pb-brand-xl">
                    <div class="rounded-2xl bg-brand-lime-dark">
                        <!-- cta card -->
                        <div class="relative flex justify-center items-center overflow-hidden p-12 lg:p-32">
                            <img src="/src/assets/svg/background-logo.svg" loading="lazy" alt=""
                                class="absolute will-change-transform max-w-[110%]"
                                style="transform: translate3d(0px, -8.5992px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0.57328deg) skew(0deg, 0deg); transform-style: preserve-3d;">

                            <!-- content -->
                            <div class="relative flex flex-col gap-4 w-full items-center">
                                <img src="/src/assets/svg/icon.svg" alt="icon">

                                <h1 class="mb-4 text-[3.35rem] leading-none lg:text-6xl text-brand-white-smoke">
                                    Ready to get started?
                                </h1>

                                <div class="flex flex-col gap-3 md:flex-row text-brand-white-smoke font-bold">
                                    <Button custom-classes="px-12 py-5 bg-brand-lime-bright text-nowrap">
                                        Book a demo
                                    </Button>

                                    <a href="#"
                                        class="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-center border border-[#ffffff1a] bg-[#153034] rounded-lg w-3/4 text-nowrap md:w-full">
                                        Contact us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="px-6 pb-8 md:px-brand-xl lg:px-24 bg-brand-black">
                <div
                    class="pt-8 pb-12 grid gap-y-12 lg:gap-y-16 gap-x-[4vw] grid-cols-1 lg:grid-cols-[0.75fr_1fr] grid-rows-[auto] auto-cols-fr items-start">
                    <!-- newsletter -->
                    <div class="flex flex-col gap-6 max-w-[22.5rem]">
                        <a href="#">
                            <img src="/src/assets/svg/brand-logo-light.svg" alt="logo">
                        </a>
                        <p class="text-brand-slate-gray">Join our newsletter to stay up to date on features and
                            releases.</p>

                        <!-- form -->
                        <div class="bg-brand-lime-dark md:mb-3">
                            <form action="#"
                                class="grid grid-cols-1 gap-y-3 md:gap-x-4 md:gap-y-4 md:grid-rows-[auto] md:grid-cols-[1fr_max-content] md:auto-cols-fr p-2 border border-brand-lime-light rounded-lg">
                                <input type="email" name="email" placeholder="Enter your email" id=""
                                    class="w-full bg-transparent py-2 px-3 rounded-lg">

                                <input type="submit"
                                    class="bg-white text-brand-lime-dark px-6 py-3 w-full rounded-lg font-semibold"
                                    value="Sign up">
                            </form>
                        </div>
                    </div>

                    <!-- links -->
                    <div
                        class="grid gap-y-9 gap-x-5 md:gap-x-8 md:gap-y-4 grid-cols-1 md:grid-cols-[1fr_1fr_1fr] grid-rows-[auto] auto-cols-fr items-start">
                        <div class="flex flex-col items-start justify-start gap-4">
                            <h6 class="text-white pb-2">Solutions</h6>
                            <a href="#" class="text-brand-slate-gray">Owner/Executive</a>
                            <a href="#" class="text-brand-slate-gray">Director of Nursing</a>
                            <a href="#" class="text-brand-slate-gray">Director of Operations</a>
                            <a href="#" class="text-brand-slate-gray">Director of Finance</a>
                        </div>

                        <div class="flex flex-col items-start justify-start gap-4">
                            <h6 class="text-white pb-2">Company</h6>
                            <a href="#" class="text-brand-slate-gray">About</a>
                            <a href="#" class="text-brand-slate-gray">Resources</a>
                            <a href="#" class="text-brand-slate-gray">Contact</a>
                        </div>

                        <div class="flex flex-col items-start justify-start gap-4">
                            <h6 class="text-white pb-2">Connect</h6>
                            <a href="#" class="text-brand-slate-gray">LinkedIn</a>
                            <a href="#" class="text-brand-slate-gray">info@narrablehealth.com</a>
                        </div>
                    </div>
                </div>

                <!--logos -->
                <div
                    class="grid grid-cols-[1fr_1fr] grid-rows-[auto_auto] auto-cols-fr gap-x-4 gap-y-4 md:flex md:flex-wrap pb-12">
                    <img src="/src/assets/images/footer-logo-1.jpg" alt="logo"
                        class="rounded-md h-auto md:h-28 max-w-full">
                    <img src="/src/assets/images/footer-logo-2.jpg" alt="logo"
                        class="rounded-md h-auto md:h-28 max-w-full">
                    <img src="/src/assets/images/footer-logo-3.jpg" alt="logo"
                        class="rounded-md h-auto md:h-28 max-w-full">
                    <img src="/src/assets/images/footer-logo-4.jpg" alt="logo"
                        class="rounded-md h-auto md:h-28 max-w-full">
                </div>

                <!-- bottom -->
                <div class="flex flex-col-reverse md:flex-row justify-between">
                    <p class="text-brand-slate-gray">© Narrable Inc. All rights reserved.</p>
                    <div class="flex flex-col md:flex-row gap-4">
                        <a href="#" class="text-white">Privacy Policy</a>
                        <a href="#" class="text-white">Terms of Service</a>
                    </div>
                </div>
            </footer>
        </div>
    </AppLayout>
</template>
