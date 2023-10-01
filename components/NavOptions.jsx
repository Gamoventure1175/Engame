'use client'

import React, { useState } from "react";
import {signIn, useSession } from "next-auth/react";
import {MdLogin} from 'react-icons/md';
import SignedIn from "./SignedIn";
import Image from "next/image";

function AuthButton() {
    const {data: session} = useSession();
    const [toggleDropdown, settoggleDropdown] = useState(false);
    

    if(session) {
        return(
            <div className="flex items-center gap-3"> 
                <div className="w-fit relative">
                    <Image className="rounded-3xl cursor-pointer hover:rounded-2xl duration-500" src={session.user.image} width={45} height={45} onClick={() => settoggleDropdown((prev) => !prev)}/>
                    
                    {toggleDropdown && (
                        <SignedIn name={session.user.name} />
                    )}
                </div>
                
            </div>
        )
    }

    return(
        <div className="flex items-center border-2 p-2 rounded-xl hover:border-slate-800 hover:bg-slate-800 cursor-pointer duration-500">
            <button onClick={() => signIn()}>
                <MdLogin className=" text-xl"/>
            </button>
        </div>
    )

}

export default function NavOptions() {


    return (
        <>
            <AuthButton />
        </>
    )
}