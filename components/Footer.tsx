import { Cpu } from 'lucide-react'
import React from 'react'
import BackToTop from './BackToTop'
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-gray-800 text-white py-10 px-6 lg:grid lg:grid-cols-3 lg:px-20 gap-10 space-y-8 text-sm">
        <div className="space-y-8 flex flex-col justify-between">
            {/* Logo */}
            {/* <img src="/pe-logo-white.png" className='w-50' alt="A logo pg energy" /> */}
          <div className="flex items-center gap-4">
            <Cpu
              className="text-white bg-gradient-to-r from-green-300 to-green-600 p-2 rounded-lg" 
              size={48} 
            />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-300">
              Zodongo International Limited
            </h1>
          </div>

          <div className="">
            <BackToTop />
          </div>
        </div>
        <div className="space-y-8">
            {/* Footer Locations Uganda */}
            <article className='space-y-2'>
            <h2 className='text-lg font-bold'>Zodongo International Limited</h2>
            <p className='text-green-300'>Kampala, Uganda</p>
            <p>Head Office: P.O.Box 149549 Athina club house Kololo, Kampala, Uganda.
                Tel: +256 779 201 606, +256 779 933 268, +256 772 255 109
                Email: info@zodongo-int.com
                Website: www.zodongo-int.com
            </p>
            </article>
            <article className='space-y-2'>
            <p className='text-green-300'>Nigeria Office</p>
            <p>Regional Office: Port Harcourt, Rivers State, Nigeria
            Tel: +234 702 600 0116</p>
            </article>
            {/* Data Buttons*/}
            <div className="space-y-2 lg:space-y-0 lg:flex lg:gap-2">
            <div className=" flex gap-2 flex-col w-max">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Data Protection Policy</button>
            </div>
            <div className=" flex gap-2 flex-col w-max">
            <button className="bg-gray-500 text-white px-4 py-2 rounded-lg">Privacy Policy</button>
            </div>
            </div>
        </div>
        <div className="space-y-8">
        <article className='space-y-2'>
            <p className='text-green-300'>Dubai, U.A.E</p>
            <p>Regional Office: Business Center 1, M Floor, The Meydan Hotel, Nad Al Sheba, Dubai, U.A.E</p>
            <p>Email: info@zodongo-int.com</p>
            </article>
            {/* Socials */}
            <div className="flex gap-4">
            <img src="/facebook.png" alt="Facebook" className='w-6 h-6' />
            <img src="/linkedin.png" alt="LinkedIn" className='w-6 h-6' />
            <img src="/x.png" alt="Twitter"  className='w-6 h-6'/>
            <img src="/instagram.png" alt="Instagram"  className='w-6 h-6'/>
            </div>
        </div>
    </section>
  )
}

export default Footer