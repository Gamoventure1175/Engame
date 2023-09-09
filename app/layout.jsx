import React from 'react';
import '@styles/globals.css'
import Navigation from '@components/Navigation';

const RootLayout = ({children}) => {
  return (
    <html lang="eng">
        <body>
            <div className='main'>
                <Navigation />
                {children}
            </div>
        </body>
    </html>
  )
}

export default RootLayout
