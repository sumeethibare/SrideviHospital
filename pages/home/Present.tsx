import Appointmentbutton from '@/components/Props/Appointmentbutton'
import { ShieldExclamationIcon } from '@heroicons/react/24/solid'
import { DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import React from 'react'

function Present() {
    return (
        <>
            <section className="mx-auto max-w-6xl p-4">
                <dl className="rounded-3xl bg-emerald-100 sm:grid sm:grid-cols-3">

                    <div className="flex flex-col border-b-4 border-zinc-50 p-6 text-center sm:border-0 sm:border-r-4">

                        <iframe className="h-1/2 grayscale order-2 text-left text-base font-medium leading-6 text-gray-500 btn rounded-3xl justify-end card-body p-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1595295038674!2d77.5170645782865!3d12.961641754742864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e78cd5876db%3A0xf369d28c6752d1d!2sShridevi%20Hospital!5e0!3m2!1sen!2sin!4v1734618027747!5m2!1sen!2sin" loading="lazy"></iframe>

                        <dd className="order-1 mb-3 text-xl text-center tracking-tight text-green-600">
                            <div className="flex items-center">
                                <CalendarDaysIcon className="size-5" aria-hidden="true" />
                                <span className="uppercase mx-4 font-bold">Visit everytime</span>
                            </div>
                        </dd>
                    </div>

                    <div className="flex flex-col border-b-4 border-zinc-50 p-6 text-center sm:border-0 sm:border-r-4">
                        <dt className="order-2 text-left pt-3 text-base font-medium leading-6 text-gray-500 justify-end card-body p-1">
                            <span>book an appointment online for your prefered doctor, time & slot</span><br /><br />
                            <Appointmentbutton />
                        </dt>
                        <dd className="order-1 text-xl tracking-tight text-green-600">
                            <div className="flex items-center">
                                <DevicePhoneMobileIcon className="size-5" aria-hidden="true" />
                                <span className="uppercase mx-4 font-bold">Appointments</span>
                            </div>
                        </dd>
                    </div>

                    <div className="flex flex-col border-t-2 border-gray-100 p-6 text-left sm:border-0 sm:border-l-2">
                        <dt className="order-2 pt-3 text-2xl font-medium leading-6 text-gray-500 justify-end card-body p-1">
                            <span><strong>0816-401-3092 </strong></span><br /><br />
                            <span className="text-base btn themebutton">Call Now</span>
                        </dt>
                        <dd className="order-1 text-xl tracking-tight text-green-600">
                            <div className="flex items-center">
                                <ShieldExclamationIcon className="size-5" aria-hidden="true" />
                                <span className="uppercase mx-4 font-bold">Emergency Cases</span>
                            </div>
                        </dd>
                    </div>

                </dl>
            </section>
        </>
    )
}

export default Present