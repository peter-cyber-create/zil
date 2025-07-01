import React from 'react'
import Link from "next/link";

const FooterTwo = () => {
  return (
    <footer className='space-y-2 px-1 text-lg font-bold text-[#444444] bg-[#F5F5F5] flex flex-col text-center mx-auto lg:flex-row py-5 lg:px-10  lg:justify-between w-full'>
        <div className="">
            <p>© 2025 Zodongo International Limited <span className='text-green-600'> - Grace at work</span>. All rights reserved.</p>
        </div>
        <div className="flex justify-center max-w-2xs items-center gap-5 flex-wrap">
            <div className="w-24 lg:w-24"><img src="/shell.jpg" alt="Shell" /></div>
            <div className="w-24 lg:w-24"><img src="/daewoo.jpg" alt="Daewoo" /></div>
            <div className="w-24 lg:w-24"><img src="/exxon.png" alt="ExxonMobil" /></div>
            <div className="w-24 lg:w-24"><img src="/nitda.png" alt="NITDA" /></div>
            <div className="w-24 lg:w-24"><img src="/veritas.png" alt="Veritas" /></div>
            <div className="w-24 lg:w-24"><img src="/trace.png" alt="Trace" /></div>
            <div className="w-24 lg:w-24"><img src="/epiimtce_white.png" alt="EPIIMTCE" /></div>
            <div className="w-24 lg:w-24"><img src="/pe-logo-white.png" alt="PE Logo" /></div>
        </div>

    </footer>
  )
}

export default FooterTwo