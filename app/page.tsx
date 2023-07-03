import Link from 'next/link'
import Particles from './components/particles'

const navigation = [
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'Contact', href: '/contact' },
]

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden md:pb-0 bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
			<nav className='my-16 animate-fade-in'>
				<ul className='flex items-center justify-center gap-4'>
					{navigation.map(item => (
						<Link
							key={item.href}
							href={item.href}
							className='text-sm duration-500 text-zinc-400 hover:text-zinc-300'
						>
							{item.name}
						</Link>
					))}
				</ul>
			</nav>
			<div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
			<Particles className='absolute inset-0 -z-10 ' quantity={200} />
			<h1 className='z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
				NE-XT
			</h1>

			<div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
			<div className='my-16 text-center animate-fade-in'>
				<h2 className='text-md text-zinc-400 '>
					DIGITAL DESIGN & BRAND IDENTITY STUDIO
				</h2>
				<h2 className='mt-1 text-sm text-zinc-400 '>
					Emprowring brands with bespoke digital design & brand identities{' '}
					<br /> that stand out from the crowd
				</h2>
			</div>
		</div>
	)
}
