import Image from 'next/image'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import React from 'react'
import first from '../../../public/assets/firstSection/1.jpg'
import second from '../../../public/assets/firstSection/2.jpg'
import third from '../../../public/assets/firstSection/3.jpg'
import a4th from '../../../public/assets/firstSection/a4th.jpg'
import a5th from '../../../public/assets/firstSection/a5th.jpg'

interface CarouselProps {
	isMobile: boolean
	isTablet: boolean
	isDesktop: boolean
}

interface CarouselState {
	visibleSlides: number
}

export default class CarouselComponent extends React.Component<
	CarouselProps,
	CarouselState
> {
	constructor(props: CarouselProps) {
		super(props)
		this.state = {
			visibleSlides: 2.2,
		}
	}

	componentDidMount() {
		this.updateVisibleSlides()
		window.addEventListener('resize', this.updateVisibleSlides)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateVisibleSlides)
	}

	updateVisibleSlides = () => {
		const width = window.innerWidth

		if (width < 768) {
			this.setState({ visibleSlides: 1.4 })
		} else if (width < 1024) {
			this.setState({ visibleSlides: 2 })
		} else {
			this.setState({ visibleSlides: 2.2 })
		}
	}

	render() {
		const { visibleSlides } = this.state

		return (
			<CarouselProvider
				naturalSlideWidth={100}
				naturalSlideHeight={80}
				totalSlides={5}
				visibleSlides={visibleSlides}
				infinite={true}
				dragEnabled={true}
				touchEnabled={true}
				currentSlide={0.3}
				className='pb-20'
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
					<Slide index={4}>
						<Image className='px-1' alt='' src={a5th}></Image>
					</Slide>
					<Slide index={3}>
						<Image className='px-1' alt='' src={a4th}></Image>
					</Slide>
				</Slider>
				{/* <div className='flex justify-center'>
          <ButtonBack className='p-2'>Back</ButtonBack>
          <ButtonNext className='p-2'>Next</ButtonNext>
        </div> */}
			</CarouselProvider>
		)
	}
}
