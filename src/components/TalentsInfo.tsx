import TalentsCard from './TalentsCard';
import Image from 'next/image';
import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  title: string;
  details: {
    category: string;
    age: string;
    height: string;
    bust: string;
    waist: string;
    hips: string;
    dress: string;
    shoe: string;
  };
}

const images: ImageProps[] = [
  {
    src: '/models/francine.jpg',
    alt: 'Francine',
    title: 'Francine',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/lucas.jpg',
    alt: 'Lucas',
    title: 'Lucas',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/tainara.jpg',
    alt: 'Tainara',
    title: 'Tainara',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/camila.jpg',
    alt: 'Camila',
    title: 'Camila',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/augusto.jpg',
    alt: 'Augusto',
    title: 'Augusto',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/julia.jpg',
    alt: 'Julia',
    title: 'Julia',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/francine.jpg',
    alt: 'Francine',
    title: 'Francine',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/lucas.jpg',
    alt: 'Lucas',
    title: 'Lucas',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/tainara.jpg',
    alt: 'Tainara',
    title: 'Tainara',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/camila.jpg',
    alt: 'Camila',
    title: 'Camila',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/augusto.jpg',
    alt: 'Augusto',
    title: 'Augusto',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/julia.jpg',
    alt: 'Julia',
    title: 'Julia',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/francine.jpg',
    alt: 'Francine',
    title: 'Francine',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/lucas.jpg',
    alt: 'Lucas',
    title: 'Lucas',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/tainara.jpg',
    alt: 'Tainara',
    title: 'Tainara',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/camila.jpg',
    alt: 'Camila',
    title: 'Camila',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/augusto.jpg',
    alt: 'Augusto',
    title: 'Augusto',
    details: {
      category: 'Fashion Men',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
  {
    src: '/models/julia.jpg',
    alt: 'Julia',
    title: 'Julia',
    details: {
      category: 'Fashion Women',
      age: '25',
      height: '1.75',
      bust: '80',
      waist: '60',
      hips: '90',
      dress: '38',
      shoe: '42',
    },
  },
];

const TalentsInfo: React.FC = () => {
  return (
    <section className="flex min-h-screen w-full items-start justify-center py-10">
      <div className="grid grid-cols-6 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative overflow-hidden filter transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <Image src={img.src} alt={img.alt} width={200} height={200} />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-end bg-black bg-opacity-70 p-4 opacity-0 transition-opacity hover:opacity-100">
              <TalentsCard title={img.title} details={img.details} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TalentsInfo;
