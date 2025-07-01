'use client'
import React from 'react'
import Image from 'next/image'

const Partners = () => {
  const partners = [
    { name: 'Shell', logo: '/shell.jpg' },
    { name: 'ExxonMobil', logo: '/exxon.png' },
    { name: 'Daewoo', logo: '/daewoo.jpg' },
    { name: 'NITDA', logo: '/nitda.png' },
    { name: 'Veritas', logo: '/veritas.png' },
    { name: 'Trace', logo: '/trace.png' },
    { name: 'EPIIMTCE', logo: '/epiimtce_white.png' },
    { name: 'PE Logo', logo: '/pe-logo-white.png' }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Our Partners & Clients
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by leading organizations across various industries. We're proud to work with companies that share our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={120}
                height={60}
                className="max-w-full h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            And many more organizations trust Zodongo International Limited for their business needs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Partners
