import React from 'react';
import Navbar from '@/components/Navbar';
import TalentsInfo from '@/components/TalentsInfo';

export default function Models() {
  return (
    <div>
      <main className="p-4">
        <Navbar />
        <TalentsInfo />
      </main>
    </div>
  );
}
