import Appointmentbutton from '@/components/Props/Appointmentbutton'
import Image from 'next/image'
import React from 'react'
import Present from './Present'

function Hero() {
    return (
        <>

            <section className="w-full pt-12 md:pt-24 lg:pt-24 xl:pt-24 border-b bg-gradient-to-b from-green-50 to-white">
                <div className="container px-4 md:px-12">
                    <div className="grid gap-6 items-center lg:grid-cols-[1fr_400px] lg:gap-6 xl:grid-cols-[1fr_400px]">
                        <div className="flex flex-col justify-center pb-12 lg:pb-24 lg:pl-36 space-y-4">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter text-green-800 sm:text-5xl xl:text-6xl">Your Health, Our Priority</h1>
                                <p className="max-w-[600px] text-green-700 md:text-xl">Book doctor appointments and schedule health scans with ease.</p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Appointmentbutton />
                            </div>
                        </div>
                        <Image alt="Medical professionals" className="mx-auto md:mx-0 h-[200px] lg:h-[400px] object-contain sm:w-full lg:order-last shadow-inherit" src="/props/hero/doctor.png" width={400} height={400} />
                    </div>
                </div>
                <Present />
            </section>

        </>
    )
}

export default Hero
