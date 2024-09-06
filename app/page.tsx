import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { assert } from 'console';
import PatientForm from '@/components/forms/PatientForm';

export default function page() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* Otp auth for admin */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src="/assets/icons/logo.svg"
            height={1000}
            width={1000}
            alt="image-logo"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl: text-left">
              MedEase
            </p>
            <Link href="/?admin=true" className="text-green=500">
              Admin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
