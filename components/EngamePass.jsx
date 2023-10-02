import React from 'react'
import Image from 'next/image'
import bg from '@public/assets/images/classicgames.png'

const style = {
  backgroundImage: `linear-gradient(40deg, rgba(60,0,120,0.7960317916228992) 0%, rgba(37,0,76,0.46) 100%), url("${bg.src}")`,
  backgroundSize: "cover",
  backgroundPosition: "center"
}

function EngamePass() {
  return (
    <div className="w-full h-screen flex items-center justify-center" style={style}>
      <div className="flex-col mx-auto w-2/3 my-28 flex justify-center items-center text-center p-12 gap-3 engame text-2xl" >
        <div className='flex text-3xl flex-row justify-center items-center gap-5'>
          <Image 
          src='/assets/images/logo.png'
            width={70}
            height={70}
            alt="Engame"
          />
          <div>EnGame Pass</div>
        </div>
        <p>Play everything from Space Invaders to Counter Strike. Unlock new and exclusive achievements and perks.</p>
        <div>
          Coming Soon....
        </div>
      </div>
    </div>
  )
}

export default EngamePass
