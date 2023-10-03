import Image from 'next/image'
import React from 'react'
import pacman from "@public/assets/gameposters/pacman.png"
import colorblast from "@public/assets/gameposters/colorblast.jpg"
import flappybird from "@public/assets/gameposters/flappybird.png"
import menja from '@public/assets/gameposters/menja.png'
import snakeo from '@public/assets/gameposters/snakeo.png'
import tetris from '@public/assets/gameposters/tetris.jpg'
import tictac from '@public/assets/gameposters/tictactoe.png'
import typeing from '@public/assets/gameposters/typing.jpeg'
import rop from "@public/assets/gameposters/rockpaperscissor.png"

function Games() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 text-center">

      <h1 className='text-3xl my-5'>Explore Our Best Retro Inspired Custom Games</h1>

      <div className="w-[80%] flex flex-col gap-3 text-center items-center text-xl bg-black py-10">
        <a className="block w-fit" target="_blank" href="https://classicpacman.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={pacman}
                width={150}
                height={20}
            />
            <h1 className="text-lg">Pacman</h1>
        </a>
        <span className="w-1/2">PAC-MAN is a cultural icon whose popularity has crossed the globe for more than 40 years. His journey through the maze of gaming universe is far from over!</span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-20  w-[80%] py-10 bg-black">
        <a target="_blank" className='hover:bg-blue-800 duration-200' href="https://tetrisengame.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={tetris}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Tetris</h1>
        </a>
        <a target="_blank"  className='hover:bg-green-700 duration-200' href="https://flappybirdengame.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={flappybird}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Flappy Bird</h1>
        </a>
        <a target="_blank" className='hover:bg-purple-700 duration-200' href="https://colorblast.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={colorblast}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Color Blast</h1>
        </a>
        <a target="_blank" className='hover:bg-slate-700 duration-200' href="https://menja.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={menja}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Menja</h1>
        </a>
        <a target="_blank" className='hover:bg-red-600 duration-200' href="https://tictactoeattack.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={tictac}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Tic Tac Toe</h1>
        </a>
        <a target="_blank" className='hover:bg-gray-600 duration-200' href="https://snakeogame.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={snakeo}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Snakeo</h1>
        </a>
        <a target="_blank" className='hover:bg-amber-500 duration-200'  href="https://typocheck.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={typeing}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Typing</h1>
        </a>
        <a target="_blank" className='hover:bg-pink-600 duration-200' href="https://rockpaperscissorsengame.netlify.app/">
            <Image className="block w-[200px] h-[250px] object-cover"
                src={rop}
                width={150}
                height={20}
            />
            <h1 className="text-xl">Rock Paper Scissor</h1>
        </a>
      </div>
    </div>
  )
}

export default Games
