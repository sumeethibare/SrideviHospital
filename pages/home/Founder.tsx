import Image from "next/image";
import Manomani from "@/public/manomani.webp"

export default function Founder() {
    return (
        <section
            id="blockquote"
            className="lg:bg-gradient-to-r bg-gradient-to-b from-teal-500 to-emerald-800 pb-16 lg:relative lg:z-10 lg:pb-0"
        >
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                <div className="relative lg:-my-8">
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"></div>
                    <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                        <div className="aspect-w-10 aspect-h-6 overflow-hidden rounded-xl shadow-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                            <Image
                                alt="MBBS,MS,FSGE, FMAS"
                                loading="lazy"
                                decoding="async"
                                className="object-cover rounded-3xl lg:h-full lg:w-full lg:hover:scale-105 lg:hover:shadow-2xl lg:hover:transition-all hover:duration-500 duration-300"
                                sizes="100vw"
                                src={Manomani}
                                fill
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
                        <blockquote>
                            <div>
                                <svg
                                    className="h-12 w-12 text-white opacity-25"
                                    fill="currentColor"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
                                </svg>
                                <div className="md:hidden mt-2 w-8/12 rounded-xl lg:h-full">
                                    <Image
                                        className="rounded-xl lg:h-full lg:w-full "
                                        src={Manomani}
                                        alt="MBBS,MS,FSGE, FMAS"
                                        width={500}
                                        height={500}
                                    />
                                </div>
                                <p className="mt-6 text-base font-regular tracking-tight leading-6 text-white">
                                    At Shridevi Hospital, we stand at the forefront of compassionate healthcare, dedicated to serving our community with unwavering commitment and expertise. With a legacy rooted in a vision of holistic healing, we strive to provide world-class medical services tailored to the unique needs of each individual.
                                </p>
                            </div>
                            <footer className="mt-6">
                                <p className="text-base font-regular tracking-tight text-white">DR MANONMANI M.H</p>
                                <p className="text-base font-regular text-green-100">MBBS,MS,FSGE, FMAS</p>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}
