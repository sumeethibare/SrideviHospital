import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/carousel/1.png',
    '/carousel/2.png',
    '/carousel/3.png',
    '/carousel/4.png',
    '/carousel/5.png',
    '/carousel/6.png',
    '/carousel/7.png',
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-lg font-semibold text-green-600">What we offer</h2>
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Our Gallery</p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">Journey with Us Through the Colors of Care - Explore Our Hospital Gallery.</p>
      </div>
      <div className="relative">
        <ul className="flex overflow-x-auto scrollbar-hide">
          {images.map((src, index) => (
            <li key={index} className="flex-shrink-0 w-[300px] px-2">
              <div className="relative h-64 sm:h-80 md:h-96 rounded-xl border">
                <Image
                  alt={`Gallery image ${index + 1}`}
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                  priority={index === 0}
                />
              </div>
            </li>
          ))}
        </ul>

        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 ease-in-out"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left w-6 h-6 text-gray-800">
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-all duration-200 ease-in-out"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right w-6 h-6 text-gray-800">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-200 ease-in-out ${index === 6 ? 'bg-green-600' : 'bg-gray-300'} hover:bg-gray-400`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
      <div className="text-center mt-4 text-gray-600">7 of 7</div>
    </section>
  );
}
