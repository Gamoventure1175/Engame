import React from 'react';
import '@styles/globals.css'
import Navigation from '@components/Navigation';




export const metadata = {
  title:"Engame",
  description:"Best Retro Gaming Website"
}



const RootLayout = async({children}) => {

  return (
    <html lang="eng">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>

          <div className='w-full main min-h-screen h-max box-border'>
            <Navigation />
            <div className='h-fit text-white'>
              {children}
            </div>
          </div>

      </body>
    </html>
  )
}

export default RootLayout
