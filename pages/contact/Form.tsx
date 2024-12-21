import React from "react";

const Form = () => {
    return (
        <div className="mx-auto max-w-7xl py-16 px-4 sm:pt-24 sm:px-6 lg:px-8">
            <div className="relative bg-zinc-50">
                <h2 className="sr-only">Contact us</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 border-2 border-zinc-200">
                    {/* Contact Information Section */}
                    <div className="relative overflow-hidden bg-emerald-700 py-10 px-6 sm:px-10 xl:p-12">
                        <h3 className="text-lg font-medium text-white">Contact information</h3>
                        <p className="mt-6 max-w-3xl text-base text-indigo-50">
                            You can contact us any way that is convenient for you. We are available 24/7 via Phone.
                            You can also use a quick contact form below or visit our medical center personally.
                            We would be happy to answer your questions.
                        </p>
                        <dl className="mt-8 space-y-6">
                            <dt><span className="sr-only">Phone number</span></dt>
                            <dd className="flex text-base text-indigo-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                    />
                                </svg>
                                <span className="ml-3">0816-401-3092</span>
                            </dd>
                            <dt><span className="sr-only">Email</span></dt>
                            <dd className="flex text-base text-indigo-50">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6 flex-shrink-0 text-indigo-200"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                    />
                                </svg>
                                <span className="ml-3">shridevicityhospital@gmail.com</span>
                            </dd>
                        </dl>
                    </div>
                    {/* Form Section */}
                    <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                        <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>
                        <form action="#" method="POST" className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
                                    First name
                                </label>
                                <input
                                    id="first-name"
                                    name="first-name"
                                    type="text"
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                    autoComplete="given-name"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
                                    Last name
                                </label>
                                <input
                                    id="last-name"
                                    name="last-name"
                                    type="text"
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                    autoComplete="family-name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                    autoComplete="email"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                                    Phone <span className="text-sm text-gray-500">(Optional)</span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                    aria-describedby="phone-optional"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-900">
                                    Subject
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    maxLength={500}
                                    className="mt-1 input block w-full rounded-none border border-gray-300 py-3 px-4 text-gray-900"
                                ></textarea>
                            </div>
                            <div className="sm:col-span-2 sm:flex sm:justify-start">
                                <button
                                    type="submit"
                                    className="btn themebutton rounded-none lg:w-40"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
