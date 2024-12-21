import Image from 'next/image';
import { localImages } from '@/data/Gallery';

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <p className="mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Our Gallery</p>
        <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
          Journey with Us Through the Colors of Care - Explore Our Hospital Gallery.
        </p>
      </div>

      <div className="carousel carousel-center bg-zinc-100 rounded-3xl max-w-md lg:max-w-full space-x-2 lg:p-2">
        {localImages.map((src, index) => (
          <div key={index} className='carousel-item h-80 relative sm:h-80 md:h-96 rounded-xl border lg:hover:scale-90 lg:hover:shadow-2xl lg:hover:transition-all hover:duration-500 duration-300'>
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={300}
              unoptimized
              className='rounded-2xl w-full object-cover'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
