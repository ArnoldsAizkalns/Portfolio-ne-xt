import first from '@1.jpg'
import second from '@2.jpg'
import third from '@3.jpg'

import Image from 'next/image'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import React from 'react'

export default class extends React.Component {
	render() {
		return (
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={80}
				totalSlides={3}
				visibleSlides={2.2}
				infinite={true}
				dragEnabled={true}
				touchEnabled={true}
				currentSlide={0.3}
			>
				<Slider>
					<Slide index={0}>
						<Image className='px-1' alt='' src={first}></Image>
					</Slide>
					<Slide index={1}>
						<Image className='px-1' alt='' src={second}></Image>
					</Slide>
					<Slide index={2}>
						<Image className='px-1' alt='' src={third}></Image>
					</Slide>
				</Slider>
				{/* 				<div className='flex justify-center'>
					<ButtonBack className='p-2'>Back</ButtonBack>
					<ButtonNext className='p-2'>Next</ButtonNext>
				</div> */}
			</CarouselProvider>
		)
	}
}
