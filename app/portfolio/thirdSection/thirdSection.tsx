import Project1 from './projects/project1'
import Project3 from './projects/project3'
import Project2 from './projects/project2'
import { motion } from 'framer-motion'
import styles from '/styles'

const staggerContainer = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.2, // Интервал между анимацией дочерних элементов
			delayChildren: 0.4, // Задержка перед анимацией дочерних элементов
		},
	},
}

const fadeIn = {
	hidden: { opacity: 0 },
	show: { opacity: 1 },
}

export default function ThirdSection() {
	return (
		<div className='w-full pb-10 mx-auto'>
			<div className='px-2 md:px-14'>
				<h2>PORTFOLIO</h2>
				<div className='border border-b mt-[4px] border-black'></div>
			</div>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				animate='show'
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<motion.div variants={fadeIn}>
					<Project1 />
				</motion.div>
			</motion.div>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				animate='show'
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<motion.div variants={fadeIn}>
					<Project2 />
				</motion.div>
			</motion.div>
			<motion.div
				variants={staggerContainer}
				initial='hidden'
				animate='show'
				className={`${styles.innerWidth} mx-auto flex flex-col`}
			>
				<motion.div variants={fadeIn}>
					<Project3 />
				</motion.div>
			</motion.div>
		</div>
	)
}
