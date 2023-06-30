import { motion } from 'framer-motion'
export const fadeIn = (direction, type, delay, duration) => ({
	hidden: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: 'easeOut',
		},
	},
})
export const textContainer = {
	hidden: {
		opacity: 0,
	},
	show: (i = 1) => ({
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
	}),
}

export const textVariant2 = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	show: {
		opacity: 9,
		y: 20,
		transition: {
			duration: 1,
			ease: 'easeIn',
		},
	},
}
export const TypingText = ({ title, textStyles }) => (
	<motion.p
		variants={textContainer}
		className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
	>
		{Array.from(title).map((letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{letter === ' ' ? '\u00A0' : letter}
			</motion.span>
		))}
	</motion.p>
)

export const TitleText = ({ title, textStyles }) => (
	<motion.h2
		variants={textVariant2}
		initial='hidden'
		whileInView='show'
		className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
	>
		{title}
	</motion.h2>
)
