'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: 'Home', path: '/' },
    { title: 'Models', path: '/models' },
    { title: 'Cast', path: '/models' }, // Create cast page and change this path to '/cast'
    { title: 'Contact Us', path: '/' }, // create contact us page and change this path to '/contact-us'
  ];

  return (
    <nav className="w-full border-b bg-white md:border-0">
      <div className="mx-auto max-w-screen-xl items-center px-4 md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:block md:py-1">
          <Link href="/">
            <h1 className="text-2xl font-bold text-black">Studio Models</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
            state ? 'block' : 'hidden'
          }`}
        >
          <ul className="items-center justify-center md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li
                key={idx}
                className="border-[#141414] p-1 font-bold text-black hover:border-b-2"
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
