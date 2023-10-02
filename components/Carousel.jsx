'use client'

import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from 'next/link';

const imageUrls = [
	{
		name: "space invaders",
		url: "https://wallpaperset.com/w/full/2/0/c/62836.jpg"
	},
	{
		name: "streets of rage 2",
		url: "https://wallpapercave.com/wp/wp7060715.jpg"
	},
	{
		name: "tetris",
		url: "https://i.redd.it/96po75b3dcr21.png"
	},
	{
		name: "super mario 64",
		url: "https://wallpapercave.com/wp/wp3621392.png"
	},
	{
		name: 'pacman',
		url: "https://wallpapercrafter.com/desktop2/730504-pixel-art-Trixel-Pacman-Clyde-Inky-Pinky-Blinky.jpg"
	}, 
	{
		name: 'street fighter',
		url: "https://i.pinimg.com/originals/1e/1a/4d/1e1a4d89c1602846dcab01db077048e7.jpg"
	},
	{
		name: "f-zero",
		url: "https://images7.alphacoders.com/380/thumb-1920-380201.png"
	}
]

export default class NextJsCarousel extends Component {

	render() {
		return (
		<div className='relative'> 
			<div className='text-5xl absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-center items-center carousel-background gap-8'>
				Checkout The Best Collection of Retro Games
				<p className='text-2xl text-center px-52 text-gray-300'>
				Welcome to the world of old games that for­med the history of the video gaming in­dus­try. These games represent the best vi­de­o games for the generations of those olden days.
				</p>

			</div>
			<Carousel 
			showArrows={false} 
			autoPlay 
			interval="3000" 
			transitionTime="3000" 
			infiniteLoop
			axis='horizontal'
			centerMode={false}
			dynamicHeight={true}
			showIndicators={false}
			showStatus={false}
			showThumbs={false}
		>
			
			{imageUrls.map((game) => (
				<div>
					<img src={game.url} alt="img"/>
				</div>
			))}
			
		</Carousel>
		</div>
		);
	}
};
