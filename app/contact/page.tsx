'use client'
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Phone,
} from 'lucide-react'
import Link from 'next/link'
import { Card } from '../components/card'
import { Navigation } from '../components/nav'
import ContactForm from './contactForm/contactForm.js'

const socials = [
	{
		icon: <Instagram size={20} />,
		href: '/',
		label: 'Instagram',
		handle: '@ne-xt.pro',
		key: 'inst',
	},
	{
		icon: <Mail size={20} />,
		href: '/',
		label: 'Email',
		handle: 'info@ne-xt.pro',
		key: 'mail',
	},
	{
		icon: <Phone size={20} />,
		href: '/',
		label: 'Contact',
		handle: '+371 29564777',
		key: 'phone',
	},
	{
		icon: <Facebook size={20} />,
		href: '/',
		label: 'Facebook',
		handle: '@ne-xt.pro',
		key: 'face',
	},
	{
		icon: <Linkedin size={20} />,
		href: '/',
		label: 'LinkedIn',
		handle: '/ne-xt.pro',
		key: 'link',
	},
	{
		icon: <Github size={20} />,
		href: '/',
		label: 'GitHub',
		handle: '/ne-xt.pro',
		key: 'git',
	},
]

export default function Example() {
	return (
		<div className=' bg-gradient-to-tl from-zinc-800/10 via-zinc-900 to-zinc-800/10'>
			<Navigation />
			<div className='container flex flex-col items-center justify-center min-h-screen px-4 pt-20 mx-auto sm:pt-40'>
				<div className='grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 md:grid-cols-2 lg:gap-16 2xl:grid-cols-3'>
					{socials.map((s, index) => (
						<Card key={index}>
							<Link
								href={s.href}
								target='_blank'
								className='relative flex flex-col items-center gap-4 p-4 duration-700 group md:gap-8 md:py-14 lg:pb-24 md:p-16'
							>
								<span
									className='absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent'
									aria-hidden='true'
								/>
								<span className='relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange'>
									{s.icon}
								</span>{' '}
								<div className='z-10 flex flex-col items-center'>
									<span className='font-sans text-xl font-medium duration-150 lg:text-2xl text-zinc-200 group-hover:text-white'>
										{s.handle}
									</span>
									<span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200'>
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
				<ContactForm />
				<div className='pt-20 pb-10'>
					<h2 className='text-2xl text-white font-display'>NE-XT</h2>
				</div>
			</div>
		</div>
	)
}
