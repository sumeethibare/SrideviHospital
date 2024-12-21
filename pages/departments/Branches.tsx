import Image from "next/image";
import { departments } from "@/data/departments";
import { HeartIcon } from "@heroicons/react/24/solid";
import Bg from "@/public/props/others/lab.jpg";
export default function Branches() {
    return (
        <div className="relative">

            <div className="absolute inset-0">
                <div className="relative w-full h-full">
                    <Image
                        src={Bg}
                        alt="backgroundImage"
                        fill
                        className="object-cover"
                        quality={100}
                        sizes="100vw"
                    />
                </div>
                <div
                    className="absolute inset-0 bg-emerald-900 lg:bg-emerald-950 mix-blend-multiply"
                    aria-hidden="true"
                ></div>
            </div>

            <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                    OUR DEPARTMENTS
                </h1>
                <p className="mt-6 max-w-3xl tracking-tight text-xl text-zinc-200">
                    At Shridevi Hospital, we pride ourselves on a team of highly skilled
                    and experienced specialists who are committed to delivering
                    personalized care tailored to your unique needs. From diagnostics to
                    treatment and rehabilitation, our experts utilize the latest
                    advancements in medical technology to ensure accurate diagnoses and
                    effective interventions.
                </p>
            </div>

            <section
                className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
                aria-labelledby="contact-heading"
            >
                <h2 className="sr-only" id="contact-heading">
                    Who We Are
                </h2>
                <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-8 py-16">
                    {departments.map((department, index) => (
                        <div
                            key={index}
                            className="card bg-zinc-50 rounded-3xl"
                        >
                            <div className="card-body relative flex-1 px-6 pt-16 pb-8">
                                <div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-full bg-white p-4">
                                    <HeartIcon
                                        className="size-6 text-rose-600" />
                                </div>
                                <h3 className="text-2xl font-semibold text-zinc-900">
                                    {department.name}
                                </h3>
                                <p className="mt-4 text-base tracking-tight text-zinc-700">
                                    {department.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
