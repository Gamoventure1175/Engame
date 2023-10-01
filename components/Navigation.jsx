'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import '@styles/globals.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavOptions from './NavOptions'


const Navigation = () => {
  const [toggleDropdown, setDropdown] = useState(false);

  return (
    <div className="flex justify-between px-32 m-0 items-center text-white h-20 w-full p-5 nav-bg fixed top-0 z-50">
      <Link 
        href='/'
        className="flex gap-1 justify-items-center items-center"
      >
        <Image 
            src='/assets/images/logo.png'
            width={80}
            height={80}
            alt="Engame"
            className=' block m-0 p-0'
        />
        <p className=" font-spacemono text-3xl tracking-wide font-light">EnGame</p>
      </Link>

      <div className=' flex gap-6 items-center'>
      <NavOptions className=" w-fit h-fit" />


        <div
          onClick={()=>setDropdown((prev) => !prev)}
          className='flex relative'
        >
          <FontAwesomeIcon icon={faBars} 
          className='nav-icons'/>
          {toggleDropdown && (
            <div className='dropdown'>
              <Link href='/engame_pass'
                className='dropdown_link'
              >Engame Pass</Link>
              <Link href='/games'
              className='dropdown_link'
              >Games</Link>
              <Link href='/devices'
              className='dropdown_link'
              >Devices</Link>
              <Link href='/community'
              className='dropdown_link'
              >Community</Link>
              <Link href='/about'
              className='dropdown_link'
              >About</Link>
            </div>
        )}
        </div>

      </div>
    </div>

    
  )
}

export default Navigation
