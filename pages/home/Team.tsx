'use client';
import Image from 'next/image';
import { TeamMembers } from '@/data/Team';
import React from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Team = () => {
    return (
        <section id="team" className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <div className="space-y-12">
                    <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
                        <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">OUR TEAM</h2>
                        <p className="text-xl text-gray-500 tracking-tighert">
                            At Shridevi Hospital, we pride ourselves on a team of highly skilled and experienced specialists who are committed to delivering personalized care tailored to your unique needs. From diagnostics to treatment and rehabilitation, our experts utilize the latest advancements in medical technology to ensure accurate diagnoses and effective interventions.
                        </p>
                    </div>
                    <ul role="list" className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        {TeamMembers.slice(0, 4).map((member) => (
                            <li key={member.id} className="flex justify-center">
                                <div className="bg-white p-4 border-2 border-zinc-100 transition-all transform lg:hover:scale-105 lg:hover:shadow-2xl duration-300">
                                    <div className="flex justify-center mb-6">
                                        <Image
                                            className="object-cover rounded-full border-4 border-green-500"
                                            src={member.imageSrc}
                                            alt={member.alt}
                                            width={192}
                                            height={192}
                                        />
                                    </div>
                                    <div className="text-center space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-green-600 font-medium">{member.title}</p>
                                        <p className="text-sm text-gray-500">{member.qualifications}</p>
                                        <p className="text-sm text-gray-400">Timings: {member.timings}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="text-center mt-10">
                        <label htmlFor="TeamList" className="themebutton btn">
                            View More
                        </label>
                    </div>
                </div>
            </div>

            {/* Team Modal */}
            <input type="checkbox" id="TeamList" className="modal-toggle" />
            <div className="modal modal-bottom" role="dialog">
                <div className="modal-box w-full h-5/6 noscrollbar rounded-none">
                    <div className='flex items-center justify-center'>
                        <ChevronUpIcon className="size-6" aria-hidden="true" />
                    </div>
                    <ul className="mt-4 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                        {TeamMembers.map((member) => (
                            <li key={member.id} className="flex justify-center">
                                <div className="bg-white p-4 border-2 border-zinc-100 transition-all transform hover:scale-105 hover:shadow-2xl duration-300">
                                    <div className="flex justify-center mb-6">
                                        <Image
                                            className="object-cover rounded-full border-4 border-green-500"
                                            src={member.imageSrc}
                                            alt={member.alt}
                                            width={192}
                                            height={192}
                                        />
                                    </div>
                                    <div className="text-center space-y-4">
                                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                        <p className="text-sm text-green-600 font-medium">{member.title}</p>
                                        <p className="text-sm text-gray-500">{member.qualifications}</p>
                                        <p className="text-sm text-gray-400">Timings: {member.timings}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <label className="modal-backdrop" htmlFor="TeamList">Close</label>
            </div>
        </section>
    );
}

export default Team;
