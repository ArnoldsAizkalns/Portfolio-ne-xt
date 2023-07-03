'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import styles from '/styles'
import { TypingText } from '/util/motion.js'

import ExploreCard from './ExploreCard'

const Explore = () => {
	const [active, setActive] = useState('world-2')

	const staggerContainer = (staggerChildren, delayChildren) => ({
		hidden: {},
		show: {
			transition: {
				staggerChildren,
				delayChildren,
			},
		},
	})

	const exploreWorlds = [
		{
			id: 'world-3',
			imgUrl: '/assets/secondSection/figure.jpg',
			title: 'Clarity in details',
		},
		{
			id: 'world-1',
			imgUrl: '/assets/secondSection/colors.jpg',
			title: 'Beauty of differences',
		},
		{
			id: 'world-2',
			imgUrl: '/assets/secondSection/paint.jpg',
			title: 'Freedom of thought',
		},
		{
			id: 'world-4',
			imgUrl: '/assets/secondSection/create.jpg',
			title: 'Fusion of ideas',
		},
	]
	return (
		<section className={`${styles.paddings} pb-20`} id='explore'>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				whileInView='show'
				viewport={{ once: false, amount: 0.25 }}
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<div className='flex flex-col gap-5 lg:flex-row min-h-[70vh] lg:min-h-[100%]'>
					{exploreWorlds.map((world, index) => (
						<ExploreCard
							key={world.id}
							{...world}
							index={index}
							active={active}
							handleClick={setActive}
							className='text-md'
						/>
					))}
				</div>
				<div className='max-w-3xl pt-6 pr-20 mx-2 text-sm uppercase md:mx-auto'>
					<TypingText
						title={[
							'Unlock the true potential',
							' of your brand with our',
							' tailored digital design solutions.',
						]}
					></TypingText>
					<TypingText
						title={[
							' Our team of experts',
							' crafts unique web designs &',
							' brand identities that leave a ',
						]}
					></TypingText>
					<TypingText
						title={['lasting impression in', ' today`s competitive landscape.']}
					></TypingText>
				</div>
			</motion.div>
		</section>
	)
}

export default Explore
