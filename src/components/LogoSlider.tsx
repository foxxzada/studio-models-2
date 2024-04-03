'use client';
import React, { use, useState } from 'react';
import Image from 'next/image';

export function LogoSlider() {
  const logos = [
    '/../logos/3m.svg',
    '/../logos/barstool-store.svg',
    '/../logos/budweiser.svg',
    '/../logos/buzzfeed.svg',
    '/../logos/forbes.svg',
    '/../logos/macys.svg',
    '/../logos/menshealth.svg',
    '/../logos/mrbeast.svg',
  ];

  return (
    <div className="group flex space-x-16 overflow-hidden pt-14">
      <div className="group-hover:paused flex animate-loop-scroll justify-center space-x-16">
        {logos.map((logo, index) => (
          <div key={index} className="items-center justify-center">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="max-w-none"
            />
          </div>
        ))}
      </div>
      <div
        className="group-hover:paused flex animate-loop-scroll justify-center space-x-16"
        aria-hidden
      >
        {logos.map((logo, index) => (
          <div key={index} className="items-center justify-center">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="max-w-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoSlider;
