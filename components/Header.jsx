import React from 'react';
import bg from '@public/assets/images/background.jpg'

const style = {
    backgroundImage: `linear-gradient(rgba(4,9,30,0.7),
    rgba(4,9,30,0.7)), url("${bg.src}")`,
    backgroundSize: "cover",
    backgroundPosition: "center"
}

function Header() {
  return (
    <div className=" flex flex-col justify-center items-center h-screen header-background gap-11" style={style}>
        <div className="flex flex-col items-center justify-center text-blue-400 gap-4 hover:text-white duration-500">
            <h1 className="text-9xl ">EnGame</h1>
            <p className="text-3xl">Making Retro Gaming Fun</p>
        </div>
        <div className='text-2xl border-2 border-blue-400 px-4 py-2 text-blue-400 z-20 hover:border-blue-900 hover:bg-blue-900 hover:text-white duration-500 rounded-lg'>
        Know More
        </div>
    </div>
  )
}

export default Header
