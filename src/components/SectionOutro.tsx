import {
  InstagramLogoIcon,
  PlusIcon,
  TwitterLogoIcon,
  ArrowTopRightIcon,
} from '@radix-ui/react-icons';
import { Button } from './ui/button';
import Link from 'next/link';

export function SectionOutro() {
  return (
    <section className="p-3">
      <div className="flex items-center justify-center">
        <h1 className="mx-1.5 w-max rounded-md bg-[#141414] p-1 text-7xl font-bold text-white">
          Connect
        </h1>
        <h1 className="text-7xl font-bold text-black">With Us</h1>
      </div>
      <div className="flex items-center justify-center p-5">
        <p className="flex justify-between gap-1">
          <InstagramLogoIcon className="mt-1" />
          <Link target="_blank" href="https://www.instagram.com/studiomodels_oficial/" rel="noopener norefferer">
            Instagram
          </Link>
        </p>
        <PlusIcon className="mx-5" />
        <p className="flex justify-between gap-1">
          <TwitterLogoIcon className="mt-1" />
          <Link target="_blank" href="https://www.instagram.com/studiomodels_oficial/" rel="noopener norefferer">
            Twitter
          </Link>
        </p>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button className="rounded-full  p-3 text-2xl font-bold text-[#141414] transition-transform duration-300 ease-in-out hover:scale-110">
            <Link target="_blank" href="https://www.instagram.com/studiomodels_oficial/" rel="noopener norefferer">Contact Us</Link>
            <ArrowTopRightIcon className=" ml-2 h-4 w-4 rounded-full" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionOutro;
