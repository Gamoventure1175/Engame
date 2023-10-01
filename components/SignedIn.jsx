import React from 'react';
import {signOut} from "next-auth/react";
import {GoSignOut} from 'react-icons/go'

function SignedIn({name}) {
  return (
    <div className='absolute top-16 -right-1 z-10 w-fit bg-gray-600 py-3 border px-3 rounded-lg flex flex-col gap-3 items-center'>
      <div className="text-lg font-thin hover:bg-slate-800 cursor-pointer duration-500 p-2 rounded-lg">{name}</div>
      <GoSignOut className="text-4xl p-2  hover:bg-slate-800 rounded-xl duration-500 cursor-pointer" onClick={() => signOut()} />
    </div>
  )
}

export default SignedIn
