import SecondaryCarousel from '@/components/Secondary-Carousel'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const page = () => {
  return (
    <div className='relative'>
        <SecondaryCarousel id = 'ep' img = "https://plus.unsplash.com/premium_photo-1679089778076-f750c7d64ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt = 'Image' title = 'Our Location'/>
        <section className='mt-[250px'>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      {/* <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight">Our Locations</h1>
        </div>
      </header> */}

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="mb-12">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">Head Office</h2>
            <p className="mb-2">P.O.Box 149549 Athina club house Kololo</p>
            <p className="mb-2">Kampala, Uganda</p>
            <p className="mb-2">Phone: +256 756743403</p>
            <p>Email: info@zodongo.com</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl text-green-600 font-semibold mb-4">Map</h2>
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7558977330957!2d32.56827631475442!3d0.3275544996417733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb02bb8a73b1%3A0x1c9d7f4f7c8d6a4e!2sKololo%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Zodongo International Limited - Kampala, Uganda"
              ></iframe>
            </div>
          </section>
        </div>
      </main>

      {/* <footer className="bg-white dark:bg-gray-800 shadow mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm">&copy; 2025 Company Name. All rights reserved.</p>
        </div>
      </footer> */}
        </div>
        </section>
    </div>
  )
}

export default page