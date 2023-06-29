'use client'
import { ArrowLeft, Facebook, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Card } from '../components/card'

const socials = [
	{
		icon: <Instagram size={20} />,
		href: '/',
		label: 'Instagram',
		handle: '@ne-xt.pro',
	},
	{
		icon: <Mail size={20} />,
		href: '/',
		label: 'Email',
		handle: 'info@ne-xt.pro',
	},
	{
		icon: <Facebook size={20} />,
		href: '/',
		label: 'Contact',
		handle: '+371 29564777',
	},
]

export default function Example() {
	const ref = useRef<HTMLElement>(null)
	const [isIntersecting, setIntersecting] = useState(true)

	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		)

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])
	return (
		<div className='bg-gradient-to-tl from-zinc-50/0 via-zinc-50 to-zinc-50/0'>
			<header ref={ref}>
				<div
					className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
						isIntersecting
							? 'bg-zinc-900/0 border-transparent'
							: 'bg-zinc-900/500  border-zinc-800 '
					}`}
				>
					<div className='container flex flex-row-reverse items-center justify-between p-6 mx-auto'>
						<div className='flex justify-between gap-8'>
							<Link
								href='/portfolio'
								className='duration-200 text-zinc-600 hover:text-zinc-100'
							>
								Portfolio
							</Link>
							<Link
								href='/contact'
								className='duration-200 text-zinc-600 hover:text-zinc-100'
							>
								Contact
							</Link>
						</div>
						<Link
							href='/'
							className='duration-200 text-zinc-200 hover:text-zinc-100'
						>
							<ArrowLeft className='w-6 h-6 ' />
						</Link>
					</div>
				</div>
			</header>
			<div className='container flex items-center justify-center min-h-screen px-4 mx-auto'>
				<div className='grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
					{socials.map(s => (
						<Card>
							<Link
								href={s.href}
								target='_blank'
								className='relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16'
							>
								<span
									className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
									aria-hidden='true'
								/>
								<span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
									{s.icon}
								</span>{' '}
								<div className='z-10 flex flex-col items-center'>
									<span className='text-xl font-medium duration-150 lg:text-2xl text-zinc-500 group-hover:text-white font-display'>
										{s.handle}
									</span>
									<span className='mt-4 text-sm text-center duration-1000 text-zinc-700 group-hover:text-zinc-50'>
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
