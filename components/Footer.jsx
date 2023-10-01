import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className="bg-black text-2xl px-12 py-8 flex flex-col justify-center gap-4">
        <div className="flex flex-1  justify-between items-center">
            <Link 
            href='/'
            className="flex gap-1 justify-items-center items-center"
            >
                <Image 
                    src='/assets/images/logo.png'
                    width={60}
                    height={60}
                    alt="Engame"
                    className=' block m-0 p-0'
                />
                <p className=" font-spacemono text-2xl tracking-wide font-light">EnGame</p>
            </Link>
            <Link href='' className="hover:bg-white hover:text-black duration-700 px-4 py-2 rounded-xl">r.r.kabilan2004@gmail.com</Link>
        </div>
        <div className="text-xl flex-1 text-center">
            <p>© 2023 Engame Gaming Limited.</p>
        </div>
        <div className="text-lg flex-1  flex justify-center align-items-center gap-4">
            <Link href='' className="hover:underline">Legal</Link>

            <Link href='' className="hover:underline">Privacy</Link>
            <Link href='' className="hover:underline">Terms Of Use</Link>
        </div>
    </div>
  )
}

export default Footer
