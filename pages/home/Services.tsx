import React from 'react';
import Image from 'next/image';
import { services } from '@/data/Services';

const Services = () => {
    return (
        <section id="services">
            <div className="bg-white">
                <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-lg font-regular text-green-600">What we offer</h2>
                        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                            Our Services
                        </p>
                        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
                            At our hospital, you can experience the best and the most extensive range of diagnostic services in the state. Feel free to browse our website for more information.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 pt-20 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`relative flex items-end justify-start w-full text-left h-96 lg:hover:scale-105 lg:hover:shadow-2xl lg:hover:transition-all hover:duration-500 duration-300 rounded-3xl overflow-hidden ${service.className}`}
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    style={{ objectFit: 'cover' }}
                                    fill={true}
                                    className="rounded-lg"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-b via-transparent from-transparent to-gray-900"></div>
                                <h2 className="z-10 p-5">
                                    <a
                                        rel="noopener noreferrer"
                                        href={service.link}
                                        className="font-medium text-md hover:underline text-gray-100"
                                    >
                                        {service.title}
                                    </a>
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
