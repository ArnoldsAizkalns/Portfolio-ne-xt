import Image from 'next/image'

import project2bg from '../../../../public/assets/thirdSection/project2bg.png'
export default function Project1() {
	return (
		<div className='w-auto pt-20'>
			<Image className='w-full' alt='bg-1' src={project2bg} />
			<div className='px-2 pt-8 md:px-14'>
				<h2>WEB DEVELOPMENT</h2>
			</div>
		</div>
	)
}
