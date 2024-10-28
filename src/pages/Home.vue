<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import ImageCard from '@/components/CardWithImage.vue'
import BenefitsCard from '@/components/BenefitsCard.vue';
import Button from '@/components/BrandButton.vue';
import WhyUsTab from '@/components/WhyUsTab.vue';
import Panels from '@/components/Panels.vue';
import ProductIcon from '@/components/ProductIcon.vue';
import ProductCheckItem from '@/components/ProductCheckListItem.vue';
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
                        <div
                            class="flex flex-wrap gap-12 w-full justify-center items-center mt-8 text-gray-500 sm:justify-between">
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
                            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-brand-black border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white">
                            Contact us
                        </a>
                    </div>
                </div>
            </section>

            <!-- Benefits section -->
            <section class="bg-brand-white-smoke py-10">
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
                    <div class="flex flex-col items-center md:flex-row md:justify-center">
                        <WhyUsTab />
                        <WhyUsTab heading="AI Powered"
                            description="Lastest advances in AI augment your day-to-day interactions." />
                        <WhyUsTab heading="Modern Design"
                            description="Built with the user in mind for the 21st century." />
                    </div>

                    <!-- panels-wrapper -->
                    <div class="overflow-hidden mt-8">
                        <Panels />
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
                                class="inline-flex items-center justify-center px-1 py-4 text-base font-medium text-center bg-brand-lime-light rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 w-3/4 text-nowrap md:w-full md:px-4">
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
                        <div class="flex flex-col gap-4 p-8 md:p-10 rounded-xl bg-brand-lime-dark">
                            <ProductIcon custom-classes="bg-brand-lime-light" svg="/src/assets/svg/dollar-sign.svg"
                                alt-text="dollar-icon" />

                            <h1 class="text-brand-white-smoke text-3xl md:text-4xl">
                                Revenue Cycle Management
                            </h1>

                            <p class="text-brand-slate-gray text-xl">For multi-payer home health agencies. Covers
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
                        <div class="flex flex-col gap-4 p-8 md:p-10 rounded-xl bg-brand-lime-dark">
                            <ProductIcon custom-classes="bg-brand-lime-light" svg="/src/assets/svg/analytics.svg"
                                alt-text="clipboard-icon" />

                            <h1 class="text-brand-white-smoke text-3xl md:text-4xl lg:text-5xl">
                                Embedded Analytics
                            </h1>

                            <p class="text-brand-slate-gray text-xl">Provide decision-making tools for home health
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
        </div>
    </AppLayout>
</template>
