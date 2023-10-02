import React from 'react';
import '@styles/globals.css'
import Navigation from '@components/Navigation';


import { getServerSession } from 'next-auth';
import SessionProvider from "@/components/ServerSession";

export const metadata = {
  title:"Engame",
  description:"Best Retro Gaming Website"
}



const RootLayout = async({children}) => {

  

  
  const session = await getServerSession();

  return (
    <html lang="eng">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <SessionProvider session={session}>
          <div className='w-full main min-h-screen h-max box-border'>
            <Navigation />
            <div className='h-fit text-white'>
              {children}
            </div>
          </div>
        </SessionProvider> 
      </body>
    </html>
  )
}

export default RootLayout
