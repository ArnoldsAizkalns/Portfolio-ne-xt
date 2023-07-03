import Image from 'next/image'

import project1bg from '/public/assets/thirdSection/project1bg.png'
export default function Project1() {
	return (
		<div className='w-auto pt-10'>
			<Image className='w-full' alt='bg-1' src={project1bg} />
			<div className='px-2 pt-8 md:px-14'>
				<h2>WEB DEVELOPMENT</h2>
			</div>
		</div>
	)
}
